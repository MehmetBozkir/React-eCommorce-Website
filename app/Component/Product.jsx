"use client";

import React from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useState, useEffect } from "react";
import { IoPricetagsSharp } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import { IoSearch } from "react-icons/io5";
import Link from "next/link";

const notify = () => toast.success("Product Added!");

function Product() {
  const [shopdata, setShopData] = useState([]);
  const [searchh, setSearchh] = useState("");
  const [loading, setLoading] = useState(true);

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
                <h1 class="card-title ">{Product.title}</h1>
                <p className="text-sm">{Product.description}</p>
                <div class="card-actions justify-end">
                  <div class="flex text-left mt-5">
                    <IoPricetagsSharp />
                    <p class="ml-2">{Product.price} $</p>
                  </div>

                  <button onClick={notify} class="btn btn-primary">
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
