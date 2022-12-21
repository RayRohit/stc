import React from "react";
import { useDropzone } from "react-dropzone";
import { FaImage } from "react-icons/fa";

export default function Image(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const Imagefiles = acceptedFiles.map((file) => (
    <h6 key={file.path}>{file.path}</h6>
  ));
  return (
    <section className="container" style={{}}>
      <div
        {...getRootProps({ className: "dropzone" })}
        className="shadow p-3"
        style={{ background: "#FAFAFA", height: "136px" }}
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
  );
}
