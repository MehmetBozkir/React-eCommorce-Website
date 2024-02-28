import React from "react";
import Link from "next/link";

function ErrorPage() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello There</h1>
            <p className="mb-5 bg-gray-600">
              ??? How did you get here dude ???
            </p>
            <Link href="/" className="btn btn-primary">
              Return Site
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
