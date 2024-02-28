import React from 'react'
import { RiLockPasswordFill } from "react-icons/ri";
import Link from 'next/link';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';


function page() {
  return (

    <div>
      <Navbar/>
    <div className="hero min-h-screen bg-base-200" style={{
          backgroundImage: "url(https://i.ibb.co/d6vMxq4/bg.jpg)"
        }}>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">
Welcome again, pleasant shopping. I would be very happy if you report any deficiencies you see on this site as issues via Git. After all, I am new to you.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-40">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text flex">Password <RiLockPasswordFill /> </span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text flex">Password Check<RiLockPasswordFill /> </span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</div>
<Footer/>
</div>
  )
}

export default page
