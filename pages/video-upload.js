import Head from "next/head";
import Link from "next/link";

import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Dummy() {
  const [loading, setloading] = useState(false);
  const [file, setFile] = useState();
  const [video, setVideo] = useState();

  const [title, settitle] = useState();
  const [description, setdescription] = useState();
  const [categories, setcategories] = useState();

  const [imgselected, setimgselected] = useState();
  const [videoselected, setVideoselected] = useState();

  // const Uploaddata = async () => {
  //   const data = new FormData();
  //   const fileName = Date.now() + file.name;
  //   data.append("file", file);
  //   data.append("name", fileName);
  //   data.append("upload_preset", "ipo-uploads");

  //   const result = await fetch(
  //     "https://api.cloudinary.com/v1_1/quitopia/image/upload",
  //     {
  //       method: "Post",
  //       body: data,
  //     }
  //   ).then((r) => r.json());
  // };

  return (
    <div className="container">
      <Head>
        <title>Video upload</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ToastContainer />

        <div className="row">
          <div className="col-md-12">
            <h3 className="mt-3 mb-3">Video Upload</h3>
          </div>
        </div>
        <div className="mt-5 row">
          <div className="col-md-6">
            <h5>Cover foto</h5>
            {imgselected ? (
              <div className="col-md-6">
                <div className="float-right">
                  <a
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => {
                      setFile(null);
                      setimgselected(null);
                    }}
                  >
                    <i className="bi bi-x"></i>
                  </a>
                </div>
                <img className="img-fluid" src={imgselected} />
              </div>
            ) : (
              <label htmlFor="file">
                <a>
                  {" "}
                  <i className="bi bi-camera-fill" style={{ fontSize: "50px" }}>
                    {" "}
                    +
                  </i>
                </a>
                <input
                  type="file"
                  id="file"
                  accept=".png,.jpeg,.jpg"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                    setimgselected(URL.createObjectURL(e.target.files[0]));
                  }}
                  style={{ display: "none" }}
                />
              </label>
            )}
          </div>
          <div className="col-md-6">
            <h5>Video</h5>

            {videoselected ? (
              <div className="col-md-6">
                <div className="float-right">
                  <a
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => {
                      setVideo(null);
                      setVideoselected(null);
                    }}
                  >
                    <i className="bi bi-x"></i>
                  </a>
                </div>
                <video
                  style={{
                    width: "500px",
                    height: "500px",
                    marginTop: "-80px",
                  }}
                >
                  <source src={videoselected} type="video/mp4" />
                  <source src={videoselected} type="video/ogg" />
                  <source src={videoselected} type="video/webm" />
                </video>
                <br></br>
                <progress id="progressBar" value="0" max="100"></progress>
              </div>
            ) : (
              <label htmlFor="video">
                <a>
                  {" "}
                  <i className="bi bi-film" style={{ fontSize: "50px" }}>
                    {" "}
                    +
                  </i>
                </a>
                <input
                  type="file"
                  id="video"
                  accept=".mp4,.ogg,.webm"
                  onChange={(e) => {
                    setVideo(e.target.files[0]);
                    setVideoselected(URL.createObjectURL(e.target.files[0]));
                  }}
                  style={{ display: "none" }}
                />
              </label>
            )}
          </div>
          <div></div>
          <div className="col-md-4">
            <title>title</title>
            <input
              className="form-control"
              placeholder="title"
              onChange={(e) => {
                settitle(e.target.value);
              }}
            />
            <br />
            <textarea
              className="form-control"
              placeholder="Description"
              onChange={(e) => {
                setdescription(e.target.value);
              }}
            ></textarea>
            <br />
            <textarea
              className="form-control"
              placeholder="add categories. they can be sepreated with a comma."
              onChange={(e) => {
                setcategories(e.target.value);
              }}
            ></textarea>
            <br />
            <button
              className="btn btn-success"
              onClick={() => {
                Uploaddata();
              }}
            >
              Upload
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
