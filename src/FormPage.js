import React, { useEffect, useState } from "react";
// import bg from "./images/stcwall.avif";
import bg from "./images/wal.jpg";
import Image from "./Image";
import Dropzone from "./Dropzone";
import axios from "axios";

export default function FormPage() {
  const { renderVideo, files } = Dropzone();
  const { renderImage, image } = Image();
  const [checked, setChecked] = useState("");
  const [textRes, setTextRes] = useState(null);
  const [text, setText] = useState("");
  const [mov, setMov] = useState(true);
  const [avi, setAvi] = useState(true);
  const [mpg, setMpg] = useState(true);
  const handleChange = (data) => {
    if (data === "mov") {
      if (mov === true) {
        setChecked("mov");
        setMov(!mov);
      }
    }
    if (data === "avi") {
      if (avi === true) {
        setChecked("avi");
        setAvi(!avi);
      }
    }
    if (data === "mpg") {
      if (mpg === true) {
        setChecked("mpg");
        setMpg(!mpg);
      }
    }
    // console.log(data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://172.107.57.134:8095/dialogFlow", {
        languageCode: "en",
        sessionId: "NewSession",
        queryText: text,
      })
      .then((res) => {
        // const charText = res.data.response.split('.').splice(0,20).join(' ')
        const charText = res.data.response.split(".")[0];
        // setTextRes(res.data.response);
        setTextRes(charText);
        console.log(charText);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (textRes !== null) {
      const videos = files[0];
      const formData = new FormData();
      formData.append("textRes", textRes);
      formData.append("videos", videos);
      formData.append("formatType", checked);
      axios
        .post("http://216.48.186.249:5002/voicecloning", formData)
        .then((res) => {
          console.log(res);
          const a = document.createElement("a");
          a.href = `http://216.48.186.249:5002/${res.data.file_path}`;
          a.click();
        })
        .catch((err) => console.log(err));
    }
  }, [textRes]);

  return (
    <>
      <div
        className="container-fluid"
        style={{
          background: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          objectFit: "cover",
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
              className="d-flex justify-content-start align-items-center "
              style={{ height: "100%" }}
            >
              <form
                className="shadow-lg bg-white mb-3"
                style={{ borderRadius: "20px" }}
                onSubmit={handleSubmit}
              >
                <h5 className="text-center py-4 fw-bolder">Magic Maker!</h5>
                <div className="row">
                  <div className="col-sm-6 col-md-12 col-lg-6 my-2">
                    {renderVideo}
                  </div>
                  <div className="col-sm-6 col-md-12 col-lg-6 my-2">
                    {renderImage}
                  </div>
                </div>
                <div className="px-4 mb-3">
                  <textarea
                    maxLength="50"
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
                    value={text}
                    onChange={(e) => setText(e.target.value)}
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
                          value={mov}
                          id="flexCheckDefault"
                          name="flexCheckDefault"
                          onChange={() => handleChange("mov")}
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
                          value={avi}
                          id="flexCheckChecked"
                          name="flexCheckChecked"
                          onChange={() => handleChange("avi")}
                        />
                      </div>
                      <div className="form-check">
                        <label className="form-check-label" htmlFor="flexCheck">
                          MPG
                        </label>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={mpg}
                          id="flexCheck"
                          name="flexCheck"
                          onChange={() => handleChange("mpg")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end pe-4">
                  <button
                    type="submit"
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
