import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaVideo } from "react-icons/fa";

export default function Dropzone(props) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  console.log(files);
  return {
    files,
    renderVideo: (
      <section className="container">
        <div
          {...getRootProps({ className: "dropzone" })}
          className="shadow p-3"
          style={{ background: "#FAFAFA", height: "136px" }}
        >
          <div className="fs-3 py-2 text-center">
            <FaVideo />
          </div>
          <input {...getInputProps()} />
          {/* <h6 className="text-center" style={{ color: "#BDBDBD",fontSize:'14px' }}>
          {Videofiles.length === 0 ? " Drag your video here " : Videofiles}
        </h6> */}
          {files.length === 0 ? (
            <h6
              className="text-center"
              style={{ color: "#BDBDBD", fontSize: "14px" }}
            >
              Drag Your Video Here
            </h6>
          ) : (
            <h6
              className="text-center"
              style={{ color: "#BDBDBD", fontSize: "14px" }}
            >
              {files[0].path}
            </h6>
          )}
        </div>
      </section>
    ),
  };
}
