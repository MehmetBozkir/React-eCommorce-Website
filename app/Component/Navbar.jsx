import React from "react";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
import Drawer from "./Drawer";
import { FaHome } from "react-icons/fa";

function Navbar() {


  return (
    <div className="navbar bg-base-100 border-b-4">
      <div className="flex-1">
        <Drawer/>
        <Link href="/" className="btn btn-ghost text-xl"> <FaHome /> LOGO</Link>
      </div>
      <div className="flex items-center gap-3 mr-80">
  
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
              <span className="badge badge-sm indicator-item text-white bg-red-600">8</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg ">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <Link href="/Card" className="btn btn-primary btn-block">View cart</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://w7.pngwing.com/pngs/93/725/png-transparent-burkina-faso-pro-realtors-realtalyst-online-services-llp-hollow-structural-section-user-profile-others-miscellaneous-english-silhouette.png"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/Register" className="justify-between">
                Register
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link href="/Login" >Log In</Link>
            </li>
            <li>
              <a>Log Out</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
