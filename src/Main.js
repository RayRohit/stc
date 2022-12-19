import React from "react";
import Dropzone from "./Dropzone";
import Image from "./Image";
import { IoIosArrowForward } from "react-icons/io";

export default function Main() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6"></div>
        <div className="col-sm-6 my-5">
          <div className="card border-0 shadow p-3" style={{ width: "30vw" }}>
            <h5 className="text-center">Magic Maker!</h5>
            <div className="mt-2">
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
            <div>
              <Image />
            </div>
            <div className="shadow mx-4 p-2">
              <div className="d-flex justify-content-between px-1 pt-1">
                <h6 style={{ fontSize: "14px" }}>Select download format</h6>
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
              <button className="btn btn-primary">
                Download
                <span className="pb-1">
                  <IoIosArrowForward />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
