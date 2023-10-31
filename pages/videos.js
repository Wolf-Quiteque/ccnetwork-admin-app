import Head from "next/head";
import Link from "next/link";

import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Dummy() {
  const [videos, setvideos] = useState([]);



  const Getvideos = async () => {
    const res = await fetch("/api/video/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    
    setvideos(data);
  };


  useEffect(() => {
    Getvideos();
  }, []);
  return (
    <div className="container">
      <Head>
        <title>Videos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ToastContainer />

        <div className="row">
          <div className="col-md-12">
            <h3 className="mt-3 mb-3">Videos</h3>
  
          
          </div>
        </div>
        <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="form-group">
            <label htmlFor="search">Search</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="search"
                placeholder="Search..."
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  <i className="fa fa-search"></i>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              className="form-control"
              id="date"
              placeholder="Date"
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              className="form-control"
              id="category"
              placeholder="Category"
            />
          </div>
        </div>
      </div>
    </div>
        <div className="row">
     {videos && (
      videos.map((v)=>(
        <div className="col-md-3">
        <div className="card">
      <img
        src={v.imgurl}
        className="card-img-top"
        alt="Placeholder Image"
      />
      <div className="card-body">
        <h5 className="card-title">{v.title}</h5>
        <br/>
        <small>29/05/2023</small>
        <p className="card-text hide">{v.description}</p>
      </div>
      <div className="card-footer hide">
        <button className="btn btn-primary">
          <i className="fa fa-edit" /> Edit
        </button>
      </div>
    </div>
        </div>
      ))
     )}
        </div>
      </main>
    </div>
  );
}



