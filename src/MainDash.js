import React from "react";
import bg from "./images/bg1.jpeg";
// import Image from "./Image";
// import Dropzone from "./Dropzone";
import { useDropzone } from "react-dropzone";
import { FaImage, FaVideo } from "react-icons/fa";

const VideoDrag = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const Videofiles = acceptedFiles.map((file) => (
    <h6 key={file.path}>{file.path}</h6>
  ));
  return (
    <>
      <section className="container">
        <div
          {...getRootProps({ className: "dropzone" })}
          className="shadow p-3"
          style={{ background: "#FAFAFA", minHeight: "136px" }}
        >
          <div className="fs-3 py-2 text-center">
            <FaVideo />
          </div>
          <input {...getInputProps()} />
          <h6
            className="text-center"
            style={{ color: "#BDBDBD", fontSize: "14px" }}
          >
            {Videofiles.length === 0 ? " Drag your video here " : Videofiles}
          </h6>
          {/* <h4>Files</h4> */}
        </div>
      </section>
    </>
  );
};
const ImageDrag = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const Imagefiles = acceptedFiles.map((image) => (
    <h6 key={image.path}>{image.path}</h6>
  ));
  return (
    <>
      <section className="container" style={{}}>
        <div
          {...getRootProps({ className: "dropzone" })}
          className="shadow p-3"
          style={{ background: "#FAFAFA", minHeight: "136px" }}
        >
          <div className="fs-3 py-2 text-center">
            <FaImage />
          </div>
          <input {...getInputProps()} />
          <h6
            className="text-center "
            style={{ color: "#BDBDBD", fontSize: "14px" }}
          >
            {Imagefiles.length === 0 ? " Drag potrait image here " : Imagefiles}
          </h6>
        </div>
      </section>
    </>
  );
};

export default function FormPage() {
  return (
    <>
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
          <div className="col-sm-6">
            <div
              className="d-flex justify-content-start align-items-center"
              style={{ height: "100%" }}
            >
              <form
                className="shadow-lg bg-white mb-3 w-75"
                style={{ minHeight: "60vh", borderRadius: "20px" }}
              >
                <h5
                  className="text-center py-4 fw-bolder"
                  style={{
                    textDecoration: "underline",
                    textDecorationThickness: "3px",
                    textUnderlineOffset: "4px",
                  }}
                >
                  Magic Maker!
                </h5>
                <div className="row">
                  <div className="col-sm-6 col-md-12 col-lg-6 my-2">
                    <VideoDrag />
                  </div>
                  <div className="col-sm-6 col-md-12 col-lg-6 my-2">
                    <ImageDrag />
                  </div>
                </div>
                <div className="px-4 mb-3">
                  <textarea
                    style={{
                      width: "100%",
                      height: "136px",
                      resize: "none",
                      background: "#fafafa",
                      color: "#bdbdbd",
                    }}
                    className="border-0 shadow p-3"
                    placeholder="Type your text here"
                    name="text"
                  />
                </div>
                <div className="shadow mx-4 p-2 mb-3">
                  <div className=" p-1">
                    <h6 style={{ fontSize: "18px" }}>Select download format</h6>
                    <div className="d-flex justify-content-around flex-wrap">
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
                </div>
                <div className="d-flex justify-content-end pe-4">
                  <button
                    type="button"
                    className="btn btn-labeled btn-primary btn-lg my-3"
                  >
                    Download
                    <span className="btn-label">
                      <i className="fa fa-angle-right"></i>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
