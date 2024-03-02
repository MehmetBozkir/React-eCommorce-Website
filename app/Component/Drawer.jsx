"use client";

import React from "react";
import { FiAlignJustify } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";

function Drawer() {
  const [shopdata, setShopData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/categories`
        );
        setShopData(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    setTimeout(fetchData, 0);
  }, []);

  return (
    <div>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="btn drawer-button text-xl">
          <FiAlignJustify />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-50 min-h-full bg-base-200 text-base-content">
          <div className="divide-y-4 p-5 text-center text-lg divide-primary">
            <h1>Categories</h1>
            <hr />
          </div>
          {shopdata.map((product) => (
            <div key={uuidv4()}>
               <Link href={`/Category/${product}`}>
                <div className="btn drawer-button">{product}</div>
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Drawer;
