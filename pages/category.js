import Head from "next/head";
import Link from "next/link";

import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Category() {

  const [page, setpage] = useState(1);
  const [pages, setpages] = useState();
  const [nopages, setnopages] = useState();
  const [loading, setloading] = useState(false);
  const [cat, setcat] = useState(null);

  const [Info, setInfo] = useState({});
  const [reload, setreload] = useState();
  const [name, setname] = useState();
  const [onecat, setOnecat] = useState();

  var toaststate;
  var pagesarray = [];
  const [category, setcategory] = useState("");
  const add = async () => {
    toaststate = toast.loading("aguarde...", { closeOnClick: true });

    const res = await fetch("/api/video/category/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: cat,
      }),
    });
    const data = await res.json();
    Getcategories()
    
    
    setcat("");
    toast.update(toaststate, {
      render: "Added",
      type: "success",
      isLoading: false,
      closeOnClick: true,
      autoClose: 1300,
    });
  };
 
  const Getcategories = async () => {
    const res = await fetch("/api/video/category/allcat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        page: page,
        info: Info,
      }),
    });
    const data = await res.json();
    setcategory(data.usuarios);
    setnopages(data.pages);
    for (let index = 0; index < data.pages; index++) {
      var number = Number(index) + 1;
      pagesarray.push({ page: number });
    }
    setpages(pagesarray);
  };

  const DeleteCat = async (value) => {
      toaststate = toast.loading("aguarde...", { closeOnClick: true });

      const res = await fetch("/api/video/category/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: value._id,
        }),
      });
      const data = await res.json();
      Getcategories()
      toast.update(toaststate, {
        render: "deleted",
        type: "success",
        isLoading: false,
        closeOnClick: true,
        autoClose: false,
      });
  
  };


  useEffect(() => {
    setcategory([]);
    Getcategories();
  }, [page, Info,]);
  return (
    <div className="container">
      <Head>
        <title>Category</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ToastContainer />

        <div className="row">
          <div className="col-md-12">
        
          </div>
          <div className="col-md-12">
            <h3 className="mt-3 mb-3">Category/Section</h3>
            <button
              className="btn btn-success btn-sm float-right"
              data-toggle="modal"
              data-target="#novo"
            >
              New <i className="fas fa-plus"></i>
            </button>
          </div>
          <div className="col-md-12">
            <div className="card mt-3">
              <div className="card-title mb-3">
                <div className="row">
                  
                </div>
              </div>
              <div className="card-body table-responsive p-0">
                <table className="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category ? (
                      category.map((e) =>
                        e.cargo != "Admin" ? (
                          <tr>
                            <td>{e._id.substring(0, 9)}</td>
                            <td>{e.name}</td>
                            <td>
                              {" "}
                              <button
                                type="button"
                                className="close"
                                aria-label="Close"
                                data-toggle="modal"
                                data-target="#eliminar"
                                onClick={() => {
                                  DeleteCat(e);
                                }}
                              >
                                <span aria-hidden="true">
                                  {" "}
                                  <i className="fas fa-trash text-danger"></i>{" "}
                                </span>
                              </button>
                            </td>
                          </tr>
                        ) : (
                          ""
                        )
                      )
                    ) : (
                      <div className="overlay mb-5 mt-5 text-center">
                        <i className="fas fa-2x fa-sync-alt fa-spin"></i>
                      </div>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="card-footer clearfix">
                <ul className="pagination pagination-sm m-0 float-right">
                  <li className={`page-item  ${page == 1 ? "disabled" : ""}`}>
                    <a
                      href="#"
                      className="page-link"
                      onClick={() => {
                        Prev(page);
                      }}
                    >
                      Previous
                    </a>
                  </li>

                  {pages &&
                    pages.map((n) => (
                      <li
                        className={`page-item  ${
                          page == n.page ? "active" : ""
                        }`}
                      >
                        <a
                          className="page-link"
                          onClick={() => {
                            setpage(n.page);
                          }}
                          href="#"
                        >
                          {n.page}
                        </a>
                      </li>
                    ))}

                  <li
                    className={`page-item  ${
                      page == nopages ? "disabled" : ""
                    }`}
                  >
                    <a
                      href="#"
                      className="page-link"
                      onClick={() => {
                        Next(page);
                      }}
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="novo"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered ">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Category
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label for="nome">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nome"
                      value={cat}
                      onChange={(e) => {
                        setcat(e.target.value);
                      }}
                      placeholder="New Category"
                    />
                  </div>
              
                 
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>

                {loading ? (
                  <button type="button" className="btn btn-primary">
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </button>
                ) : cat ?(
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      add();
                    }}
                  >
                    Add
                  </button>
                ) : (
                  <button type="button" className="btn btn-primary" disabled>
                    Add
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
