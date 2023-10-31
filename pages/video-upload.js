import Head from "next/head";
import Link from "next/link";
import axios from "axios";

import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingBar from 'react-top-loading-bar'

var catArray = []

export default function Dummy() {
  const [loading, setloading] = useState(false);
  const [file, setFile] = useState();
  const [progre, setprogre] = useState();
  const [progress, setProgress] = useState(0);
  const [video, setVideo] = useState();

  var toaststate;

  const [title, settitle] = useState();
  const [description, setdescription] = useState();

  const [categories, setcategories] = useState(null);
  const [categoryArray, setcategoryArray] = useState([]);


  const [imgselected, setimgselected] = useState();
  const [videoselected, setVideoselected] = useState();
  const [categorynamme, setcategorynamme] = useState("");
  const [allcat, setallcat] = useState([]);
  const [maincat, setmaincat] = useState("");



  const Getcategories = async () => {
    const res = await fetch("/api/video/category/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setallcat(data);
    setmaincat(data[0].name)
  };

  
  useEffect(() => {
    if (categories !== null) {
      setcategoryArray((prevCategoryArray) => [...prevCategoryArray, categories]);
    }
  }, [categories]);


  const Uploaddata = async () => {
    let toaststate = null;
    setloading(true);
  
    const createProgressToast = () => {
      toaststate = toast(<div>Uploading... 0%</div>, { closeOnClick: true, autoClose: false });
    };
  
    createProgressToast();
  
    try {
      // Calculate timestamp once
      const timestamp = Date.now();
  
      // Upload the image
      const imgFileName = timestamp + file.name;
      const imgFormData = new FormData();
      imgFormData.append("file", file, imgFileName);
      imgFormData.append("upload_preset", "ipo-uploads");
      const imgUploadResponse = await axios.post("https://api.cloudinary.com/v1_1/quitopia/image/upload", imgFormData);
  
      // Upload the video in parallel
      const videoFileName = timestamp + video.name;
      const videoFormData = new FormData();
      videoFormData.append("file", video, videoFileName);
      videoFormData.append("upload_preset", "ipo-uploads");
      const videoUploadResponse = await axios.post("https://api.cloudinary.com/v1_1/quitopia/video/upload", videoFormData, {
        onUploadProgress: (progressEvent) => {
          const loaded = progressEvent.loaded;
          const total = progressEvent.total;
          const progress = ((loaded / total) * 100).toFixed(1);
          toast.update(toaststate, {
            render: progress === "100.0" ? "Saving data..." : `Uploading... ${progress}%`,
          });
          setProgress(progress);
        },
      });
  
      // Prepare data
      const data = {
        title: title,
        description: description,
        categories: categoryArray,
        imgurl: imgUploadResponse.data.secure_url,
        videourl: videoUploadResponse.data.secure_url,
        channel: "main",
        date: timestamp,
        section:maincat
      };
  
      // Send the data
      await fetch("/api/video/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      toast.update(toaststate, {
        render: "Video Saved",
        type: "success",
        isLoading: false,
        closeOnClick: true,
        autoClose: false,
      });
  
      // Reset states
      setVideo(null);
      setimgselected(null);
      setFile(null);
      setloading(false);
      setVideoselected(null);
      setcategories(null);
      setcategoryArray([]);
    } catch (error) {
      console.error("Error in Uploaddata:", error);
      toast.update(toaststate, {
        render: "There has been an error",
        type: "error",
        isLoading: false,
        closeOnClick: true,
        autoClose: false,
      });
    }
  };
  
  

  const Addcategory = async () =>{
    setcategories(categorynamme);
                setcategorynamme("")
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default form submission behavior
      Addcategory();
    }
  }


  useEffect(() => {
    Getcategories();
  }, []);


  function Videos (){
    return (<> <a
      className="btn btn-success btn-sm mt-1 mr-3 float-left"

    >
     <i className="fas fa-arrow-left"></i>
    </a></>)
  }

  return (
    <div className="container">
      <Head>
        <title>Video upload</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ToastContainer />
        <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        <div className="row">
          <div className="col-md-12">
        
            <h3 className="mt-3 mb-3 pl-3">Video Upload</h3>
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
                <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
              </div>
            ) : (
              <label htmlFor="file">
                <a>
                  {" "}
                  <i className="bi bi-camera-fill" style={{ fontSize: "50px" }}>
                  
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
                    width: "100%",
                  }}
                >
                  <source src={videoselected} type="video/mp4" />
                  <source src={videoselected} type="video/ogg" />
                  <source src={videoselected} type="video/webm" />
                </video>
              </div>
            ) : (
              <label htmlFor="video">
                <a>
                  {" "}
                  <i className="bi bi-film" style={{ fontSize: "50px" }}>
                
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
            <h5>Main Category</h5>
            <select className="form-control" onChange={(e) => setmaincat(e.target.value)}>
  {allcat &&
    allcat.map((c) => (
      <option key={c.id} value={c.name}>
        {c.name}
      </option>
    ))}
</select>

            <br />
            <textarea
              className="form-control"
              placeholder="Description"
              onChange={(e) => {
                setdescription(e.target.value);
              }}
            ></textarea>
            <br />
              <div className="row mb-2"> {categoryArray &&(
              
                categoryArray.map((c)=>(
                   <div className="col-md-2 ml-2"><span className="badge badge-primary">
                    {c}
                    </span></div>
                ))
              
               
              )}
                
              </div>
            <div className="row">
             
              <div className="col-md-10"><input
              type="text"
              className="form-control"
              placeholder="add a category and hit Enter..."
              value={categorynamme}
              onChange={(e) => {
                setcategorynamme(e.target.value);
              }}
              onKeyPress={handleKeyPress}

               /> </div> <div className="col-md-2 mt-1">
            <button onClick={(e) => {
            Addcategory()
              }} className="btn btn-info btn-sm">add</button></div>
            </div>
           
            <br /> 
              {loading ?(   <button
              className="btn btn-success disabled"
            
            >
              Upload
            </button>):(   <button
              className="btn btn-success"
              onClick={() => {
                Uploaddata();
              }}
            >
              Upload
            </button>)}
          </div>
        </div>
      </main>
    </div>
  );
}
