import React from "react";
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
