import React from "react";
import Link from "next/link";
import { IoLockClosedOutline } from "react-icons/io5";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

function page() {
  return (
    <div>
      <Navbar />
      <div
        className="hero min-h-screen bg-base-200 "
        style={{
          backgroundImage: "url(https://i.ibb.co/d6vMxq4/bg.jpg)",
        }}
      >
        <div className="hero-content p-10 text-center border-solid border-2 bg-opacity-50 bg-base-200 rounded-md">
          <div className="max-w-md">
            <div className="text-9xl mx-40">
              <IoLockClosedOutline />
            </div>
            <h1 className="text-5xl font-bold">Trouble logging in?</h1>
            <p className="py-6">
              Enter your email, phone, or username and well send you a link to
              get back into your account.
            </p>

            <form className="card-body">
              <div className="form-control">
                <label className="label"></label>
                <input
                  type="email"
                  placeholder="Email, Phone or Username"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Send Login Link</button>
              </div>
            </form>
            <hr />
            <h1 className="font-bold">OR</h1>
            <hr />
            <div className="mt-6">
              <Link href="/Register" className="py-6">
                Create New Account
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
