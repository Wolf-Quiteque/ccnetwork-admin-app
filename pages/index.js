import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import makeid from "../lib/random";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRef, useState, useEffect } from "react";

export default function Home() {
  var toaststate;
  const [cardTitle, setCardTitle] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [cardText, setCardText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setloading] = useState(false);
  const [activities, setactivities] = useState([]);
  const [pesquisas, setpesquisas] = useState([]);

  const [dateValues, setDateValues] = useState({});
  const [titleValues, setTitleValues] = useState({});
  const [textValues, setTextValues] = useState({});
  const [imageValues, setImageValues] = useState({});

  const [titleValuesR, setTitleValuesR] = useState({});
  const [textValuesR, setTextValuesR] = useState({});
  const [imageValuesR, setImageValuesR] = useState({});

  const getactivities = async () => {
    const res = await fetch("/api/aef/allactividades", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setactivities(data);
  };

  const getpesquisas = async () => {
    const res = await fetch("/api/aef/allpesquisas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setpesquisas(data);
  };

  const handleTitleChange = (event) => {
    setCardTitle(event.target.value);
  };

  const handleDateChange = (event) => {
    setCardDate(event.target.value);
  };

  const handleTextChange = (event) => {
    setCardText(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    setloading(true);
    toaststate = toast.loading("aguarde...", { closeOnClick: true });

    var body = {
      titlo: cardTitle,
      data: cardDate,
      texto: cardText,
    };

    var result;
    if (selectedImage) {
      const data = new FormData();
      const fileName = Date.now() + selectedImage.name;
      data.append("file", selectedImage);
      data.append("name", fileName);
      data.append("upload_preset", "ipo-uploads");

      result = await fetch(
        "https://api.cloudinary.com/v1_1/quitopia/image/upload",
        {
          method: "Post",
          body: data,
        }
      ).then((r) => r.json());

      body.img = result.secure_url;
    }

    await fetch("/api/aef/actividades", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    setCardTitle("");
    setCardDate("");
    setCardText("");
    setSelectedImage(null);

    toast.update(toaststate, {
      render: "Upload com successo",
      type: "success",
      isLoading: false,
      closeOnClick: true,
      autoClose: 1300,
    });
    setloading(false);
    getactivities();
  };

  const [researchTitle, setResearchTitle] = useState("");
  const [researchText, setResearchText] = useState("");
  const [selectedImageR, setSelectedImageR] = useState(null);

  const handleTitleChangeR = (event) => {
    setResearchTitle(event.target.value);
  };

  const handleTextChangeR = (event) => {
    setResearchText(event.target.value);
  };

  const handleImageChangeR = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImageR(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSaveR = async () => {
    setloading(true);
    toaststate = toast.loading("aguarde...", { closeOnClick: true });
    var body = {
      titlo: researchTitle,
      texto: researchText,
    };

    if (selectedImageR) {
      const data = new FormData();
      const fileName = Date.now() + selectedImageR.name;
      data.append("file", selectedImageR);
      data.append("name", fileName);
      data.append("upload_preset", "ipo-uploads");

      const result = await fetch(
        "https://api.cloudinary.com/v1_1/quitopia/image/upload",
        {
          method: "Post",
          body: data,
        }
      ).then((r) => r.json());
      body.img = result.secure_url;
    }

    await fetch("/api/aef/pesquisa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    // Reset the form
    setResearchTitle("");
    setResearchText("");
    setSelectedImageR(null);

    toast.update(toaststate, {
      render: "Upload com successo",
      type: "success",
      isLoading: false,
      closeOnClick: true,
      autoClose: 1300,
    });
    setloading(false);
    getpesquisas();
  };

  const handleDateChangeUpdate = (event) => {
    const { id, value } = event.target;
    setDateValues((prevValues) => ({ ...prevValues, [id]: value }));
  };

  const handleTitleChangeUpdate = (event) => {
    const { id, value } = event.target;
    setTitleValues((prevValues) => ({ ...prevValues, [id]: value }));
  };

  const handleTextChangeUpdate = (event) => {
    const { id, value } = event.target;
    setTextValues((prevValues) => ({ ...prevValues, [id]: value }));
  };

  const handleImageChangeUpdate = (event) => {
    const { id, files } = event.target;
    const file = files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setImageValues((prevValues) => ({
          ...prevValues,
          [id]: reader.result,
        }));
      };

      reader.readAsDataURL(file);
    }
  };

  const handleTitleChangeUpdateR = (event) => {
    const { id, value } = event.target;
    setTitleValuesR((prevValues) => ({ ...prevValues, [id]: value }));
  };

  const handleTextChangeUpdateR = (event) => {
    const { id, value } = event.target;
    setTextValuesR((prevValues) => ({ ...prevValues, [id]: value }));
  };

  const handleImageChangeUpdateR = (event) => {
    const { id, files } = event.target;
    const file = files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setImageValuesR((prevValues) => ({
          ...prevValues,
          [id]: reader.result,
        }));
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSaveUpdate = async (activityId) => {
    // Retrieve the updated values for the specific activity using its ID
    toaststate = toast.loading("aguarde...", { closeOnClick: true });
    setloading(true);

    const updatedDate = dateValues[activityId] || null;
    const updatedTitle = titleValues[activityId] || null;
    const updatedText = textValues[activityId] || null;
    const updatedImage = imageValues[activityId] || null;

    var result;
    var body = {
      id: activityId,
      titlo: updatedTitle,
      data: updatedDate,
      texto: updatedText,
    };

    if (updatedImage) {
      const data = new FormData();
      const fileName = Date.now() + updatedImage.name;
      data.append("file", updatedImage);
      data.append("name", fileName);
      data.append("upload_preset", "ipo-uploads");

      result = await fetch(
        "https://api.cloudinary.com/v1_1/quitopia/image/upload",
        {
          method: "Post",
          body: data,
        }
      ).then((r) => r.json());

      body.img = result.secure_url;
    }

    const newArray = {};
    for (const key in body) {
      if (body[key] !== null) {
        newArray[key] = body[key];
      }
    }

    await fetch("/api/aef/updateactividade", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newArray),
    });

    // Clear the specific activity's form fields
    setDateValues((prevValues) => ({ ...prevValues, [activityId]: "" }));
    setTitleValues((prevValues) => ({ ...prevValues, [activityId]: "" }));
    setTextValues((prevValues) => ({ ...prevValues, [activityId]: "" }));
    setImageValues((prevValues) => ({ ...prevValues, [activityId]: "" }));

    toast.update(toaststate, {
      render: "Upload com successo",
      type: "success",
      isLoading: false,
      closeOnClick: true,
      autoClose: 1300,
    });
    setloading(false);
    getactivities();
  };

  const handleSaveUpdateR = async (activityId) => {
    // Retrieve the updated values for the specific activity using its ID
    toaststate = toast.loading("aguarde...", { closeOnClick: true });
    setloading(true);

    const updatedTitle = titleValuesR[activityId] || null;
    const updatedText = textValuesR[activityId] || null;
    const updatedImage = imageValuesR[activityId] || null;

    var result;
    var body = {
      id: activityId,
      titlo: updatedTitle,
      texto: updatedText,
    };

    if (updatedImage) {
      const data = new FormData();
      const fileName = Date.now() + updatedImage.name;
      data.append("file", updatedImage);
      data.append("name", fileName);
      data.append("upload_preset", "ipo-uploads");

      result = await fetch(
        "https://api.cloudinary.com/v1_1/quitopia/image/upload",
        {
          method: "Post",
          body: data,
        }
      ).then((r) => r.json());

      body.img = result.secure_url;
    }

    const newArray = {};
    for (const key in body) {
      if (body[key] !== null) {
        newArray[key] = body[key];
      }
    }

    await fetch("/api/aef/updatepesquisa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newArray),
    });

    // Clear the specific activity's form fields
    setTitleValuesR((prevValues) => ({ ...prevValues, [activityId]: "" }));
    setTextValuesR((prevValues) => ({ ...prevValues, [activityId]: "" }));
    setImageValuesR((prevValues) => ({ ...prevValues, [activityId]: "" }));

    toast.update(toaststate, {
      render: "Upload com successo",
      type: "success",
      isLoading: false,
      closeOnClick: true,
      autoClose: 1300,
    });
    setloading(false);
    getpesquisas();
  };

  useEffect(() => {
    getactivities();
    getpesquisas();
  }, []);

  const EliminarActividade = async (id) => {
    toaststate = toast.loading("aguarde...", { closeOnClick: true });

    await fetch("/api/aef/deleteactividades", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });

    toast.update(toaststate, {
      type: "success",
      isLoading: false,
      closeOnClick: true,
      autoClose: 1300,
    });
    getactivities();
  };

  const EliminarPesquisa = async (id) => {
    toaststate = toast.loading("aguarde...", { closeOnClick: true });

    await fetch("/api/aef/deletePesquisa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });

    toast.update(toaststate, {
      type: "success",
      isLoading: false,
      closeOnClick: true,
      autoClose: 1300,
    });
    getpesquisas();
  };

  return (
    <div className="">
      <Head>
        <title>CCNETWORK</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ToastContainer />
        <div className="row">
          <div className="col-md-12" style={{ marginTop: "70px" }}>
            <h1>Dashboard</h1>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box">
              <span className="info-box-icon bg-info elevation-1">
                <i className="fas fa-cog"></i>
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Downloads</span>
                <span className="info-box-number">
                  10
                  <small>%</small>
                </span>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
              <span className="info-box-icon bg-danger elevation-1">
                <i className="fas fa-tv"></i>
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Screen Time</span>
                <span className="info-box-number">41,410</span>
              </div>
            </div>
          </div>

          <div className="clearfix hidden-md-up"></div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
              <span className="info-box-icon bg-success elevation-1">
                <i className="fas fa-shopping-cart"></i>
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Sales</span>
                <span className="info-box-number">760</span>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
              <span className="info-box-icon bg-warning elevation-1">
                <i className="fas fa-users"></i>
              </span>
              <div className="info-box-content">
                <span className="info-box-text">New Users</span>
                <span className="info-box-number">2,000</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
