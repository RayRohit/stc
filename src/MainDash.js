import React, { useState } from "react";
// import Dropzone from "./Dropzone";
import Image from "./Image";
import { useDropzone } from "react-dropzone";
import bg from "./images/bg1.jpeg";

export default function MainDash() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [text, setText] = useState("");

  const files = acceptedFiles.map((file) => (
    <h6 key={file.path}>{file.path}</h6>
  ));
  const file = acceptedFiles.map((file) => (
    <h6 key={file.path}>{file.path}</h6>
  ));
  const handleSubmit = (e) => {
    console.log(files, file);
  };
  return (
    <div
      className="container-fluid"
      style={{
        background: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="row">
        <div className="col-sm-6">
          <div
            className="d-flex justify-content-center align-items-end flex-column mx-3"
            style={{ height: "100vh" }}
          >
            <h1
              className="fw-bolder text-white pt-5"
              style={{ fontSize: "50px" }}
            >
              Give any <br />
              Video your <br />
              voice and face.
            </h1>
            <h6
              className="text-white"
              style={{ fontSize: "15px", lineHeight: 2 }}
            >
              Our unique AI powered tool will allow you to add
              <br /> your own voice or any voice to any video.
            </h6>
          </div>
        </div>
        <div className="col-sm-6 mb-5">
          <div
            className="d-flex justify-content-start align-items-center"
            style={{ height: "100vh" }}
          >
            <div
              className="card border-0 shadow p-3"
              style={{ minWidth: "30vw" }}
            >
              <h5 className="text-center py-3 fw-bold">Magic Maker!</h5>
              <div className="row">
                <div className="col-sm-6">
                  <section className="container">
                    <div
                      {...getRootProps({ className: "dropzone" })}
                      className="shadow ps-3 py-1"
                      style={{ background: "#FAFAFA", cursor: "pointer",height:'100px' }}
                    >
                      <input {...getInputProps()} name="video" />
                      <h6 className="py-4" style={{ color: "#BDBDBD" }}>
                        {files.length === 0 ? " Drag your video here " : files}
                      </h6>
                      {/* <h4>Files</h4> */}
                    </div>
                  </section>
                </div>
                <div className="col-sm-6">
                  <section className="container">
                    <div
                      {...getRootProps({ className: "dropzone" })}
                      className="shadow ps-3 pb-2"
                      style={{ background: "#FAFAFA", cursor: "pointer",height:'100px' }}
                    >
                      <input {...getInputProps()} name="image" />
                      <h6 className="py-4" style={{ color: "#BDBDBD" }}>
                        {file.length === 0 ? " Drag potrait image here " : file}
                      </h6>
                      {/* <h4>Files</h4> */}
                    </div>
                    <h6></h6>
                  </section>
                </div>
              </div>
              <div className="px-4">
                <textarea
                  style={{
                    width: "100%",
                    height: "100px",
                    resize: "none",
                    background: "#fafafa",
                    color: "#bdbdbd",
                  }}
                  className="border-0 shadow p-3"
                  placeholder="Type your text here"
                  name="text"
                />
              </div>
              <div className="my-2"></div>
              <div className="shadow mx-4 p-2 mt-4">
                <div className=" px-1 pt-1">
                  <h6 style={{ fontSize: "15px" }}>Select download format</h6>
                  <div className="form-check">
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      MOV
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      name="flexCheckDefault"
                    />
                  </div>
                  <div className="form-check">
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      AVI
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                      name="flexCheckChecked"
                    />
                  </div>
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="flexCheck">
                      MPG
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheck"
                      name="flexCheck"
                    />
                  </div>
                </div>
              </div>
              <div className="my-4 ms-auto">
                <button
                  type="button"
                  className="btn btn-labeled btn-primary btn-lg"
                >
                  Download
                  <span className="btn-label">
                    <i className="fa fa-angle-right"></i>
                  </span>
                </button>
                {/* <button className="btn btn-primary btn-lg">
                Download
                <span className="pb-1">
                  <IoIosArrowForward />
                </span>
              </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
