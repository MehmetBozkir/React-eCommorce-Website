"use client";
import React from "react";
import Navbar from "../../Component/Navbar";
import Footer from "../../Component/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { IoPricetagsSharp } from "react-icons/io5";



function Page({ params }) {
  const [productData, setProductData] = useState({});
  const [loading, setLoading] = useState(true);

  const productId = params.Id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        setProductData(response.data);
        console.log(response);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="grid place-items-center">
        <span className="loading loading-infinity text-primary text-center w-6/12"></span>
      </div>
    );
  }

  return (
    <>
      <div
        style={{
          backgroundImage: "url(https://i.ibb.co/d6vMxq4/bg.jpg)",
        }}
      >
        <Navbar />
        <div className="card lg:card-side shadow-xl ml-80 mr-80 mt-40 mb-80">
          <figure className="w-64">
            <img src={productData.image} width={1} height={1} alt="Photo" />
          </figure>

          <div className="card-body bg-base-100 bg-opacity-40 rounded-lg shadow-xl">
            <div className="card-actions justify-end">
              <div className="badge badge-outline">
                {" "}
                {productData.category}{" "}
              </div>
              <div className="badge badge-outline">Products</div>
            </div>
            <h2 className="card-title">
              {productData.title}{" "}
              <div className="badge badge-secondary">NEW</div>
            </h2>

            <p> {productData.description} </p>
            <div className="rating m-5">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>

            <p>
              Count Situation:{" "}
              {productData.count > 0 ? (
                <div className="text-red-600"> Nope </div>
              ) : (
                <div className="text-green-600">
                  {" "}
                  {productData.rating.count} Piece Available{" "}
                </div>
              )}{" "}
            </p>

            <div className="card-actions justify-end">
              <div class="flex text-left mt-5">
                <IoPricetagsSharp />
                <p class="ml-2">{productData.price} $</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Page;
