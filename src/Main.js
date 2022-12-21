import React from "react";
import Dropzone from "./Dropzone";
import Image from "./Image";
import bg from './images/bg1.jpeg'


export default function Main() {
  return (
    <div className="container-fluid" style={{background:`url(${bg})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
      <div className="row">
        <div className="col-sm-6">
          <div
            className="d-flex justify-content-center align-items-end flex-column mx-3"
            style={{ height: "100vh" }}
          >
            <h1 className="fw-bolder text-white pt-5" style={{ fontSize: "50px" }}>
              Give any <br />
              Video your <br />
              voice and face.
            </h1>
            <h6 className="text-white" style={{ fontSize: "15px", lineHeight: 2 }}>
              Our unique AI powered tool will allow you to add
              <br /> your own voice or any voice to any video.
            </h6>
          </div>
        </div>
        <div className="col-sm-6 mb-5">
          <div className="d-flex justify-content-start align-items-center" style={{height:'100vh'}}>
            <div
              className="card border-0 shadow p-3"
              style={{ width: "30vw", height: "65vh" }}
            >
              <h5 className="text-center py-3 fw-bold">Magic Maker!</h5>
              <div className="my-2">
                <Dropzone />
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
                />
              </div>
              <div className="my-2">
                <Image />
              </div>
              <div className="shadow mx-4 p-2 mt-4">
                <div className="d-flex justify-content-between px-1 pt-1">
                  <h6 style={{ fontSize: "16px" }}>Select download format</h6>
                  <div className="form-check">
                    <label className="form-check-label" for="flexCheckDefault">
                      MOV
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                  <div className="form-check">
                    <label className="form-check-label" for="flexCheckChecked">
                      AVI
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                  </div>
                  <div className="form-check">
                    <label className="form-check-label" for="flexCheckChecked">
                      MPG
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                  </div>
                </div>
              </div>
              <div className="my-4 ms-auto">
                <button type="button" class="btn btn-labeled btn-primary btn-lg">
                  Download
                  <span class="btn-label">
                    <i class="fa fa-angle-right"></i>
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
