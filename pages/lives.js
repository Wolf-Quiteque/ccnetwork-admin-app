import Head from "next/head";
import Link from "next/link";

import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Dummy() {
  return (
    <div className="container">
      <Head>
        <title>Live Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ToastContainer />

        <div className="row">
          <div className="col-md-12">
            <h3 className="mt-3 mb-3">Dummy Page</h3>
            <h1>Content</h1>
          </div>
        </div>
      </main>
    </div>
  );
}
