"use client";

import React from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useState, useEffect } from "react";
import { IoPricetagsSharp } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import { IoSearch } from "react-icons/io5";
import Link from "next/link";

const notify = () => toast.success("Product Added!" ,   {
  duration: 6000,
}) ;

function Product() {
  const [shopdata, setShopData] = useState([]);
  const [searchh, setSearchh] = useState("");
  const [loading, setLoading] = useState(true);
  const [productCounts, setProductCounts] = useState({});

  const totalProductsCount = Object.values(productCounts).reduce(
    (acc, count) => acc + count,
    0
  );
  const totalPrice = Object.values(productCounts).reduce(
    (acc, count, index) => {
      const productPrice = shopdata[index].price;
      return acc + count * productPrice;
    },
    0
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products`);
        setShopData(response.data);
        console.log(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    setTimeout(fetchData, 0);
  }, []);

  if (loading) {
    return (
      <div className="grid place-items-center">
        <span className="loading loading-infinity text-primary text-center w-6/12"></span>
      </div>
    );
  }

  return (
    <div className="bg-indigo-200 ">
      <div className="flex justify-center ">
        <input
          type="text"
          placeholder="Search..."
          className="input w-80 mt-5 bg-gray-100"
          onChange={(e) => setSearchh(e.target.value)}
        />

        <div className="text-2xl mt-7 ml-2 ">
          <IoSearch />
        </div>
        <div className="flex-none mt-5 bg-white border-4 rounded-full ml-5">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item text-white bg-red-600">
                  {" "}
                  {totalProductsCount}{" "}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg ">
                  {" "}
                  {totalProductsCount} Items
                </span>
                <span className="text-info">
                  Subtotal: $ {totalPrice.toFixed(2)}
                </span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    Pay Screen
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-5 ml-48 mr-20 ">
        {shopdata
          .filter((Product) => {
            return searchh.toLowerCase() === ""
              ? Product
              : Product.title.toLowerCase().includes(searchh);
          })
          .map((Product) => (
            <div
              class="card w-full bg-base-100 shadow-xl mt-10 border-8"
              key={uuidv4()}
            >
              {productCounts[Product.id] && (
                <span className="ml-auto badge-sm text-white rounded-bl-lg bg-black">
                  {productCounts[Product.id]}{" "}
                </span>
              )}
              <Link href={`/product/${Product.id}`}>
                <img
                  className="mx-auto transition duration-300 ease-in-out hover:scale-125 mt-10"
                  src={Product.image}
                  alt={Product.title}
                  width="150"
                  height="150"
                />
              </Link>
              <div class="card-body">
                <h1 class="card-title ">{Product.title} </h1>
                <p className="text-sm">{Product.description}</p>
                <div class="card-actions justify-end">
                  <div class="flex text-left mt-5">
                    <IoPricetagsSharp />
                    <p class="ml-2">{Product.price} $</p>
                  </div>

                  <button
                    onClick={() => {
                      const updatedCounts = { ...productCounts };
                      updatedCounts[Product.id] = (updatedCounts[Product.id] || 0) + 1;
                      notify();
                      setProductCounts(updatedCounts)
                      
                    }}
                    class="btn btn-primary"
                  >
                    Buy Now
                  </button>
                  <Toaster position="bottom-left" reverseOrder={false} />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Product;
