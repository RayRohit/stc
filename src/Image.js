import React from "react";
import { useDropzone } from "react-dropzone";

export default function Image(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <h6 key={file.path}>
      {file.path}
    </h6>
  ));
  console.log(files);
  return (
    <section className="container">
      <div
        {...getRootProps({ className: "dropzone" })}
        className="shadow ps-3 pb-2 "
        style={{ background: "#FAFAFA" }}
      >
        <input {...getInputProps()} />
        <h6 className="pt-3 " style={{ color: "#BDBDBD" }}>
          {files.length === 0 ?" Drag potrait image here ": files}
        </h6>
        {/* <h4>Files</h4> */}
      </div>
      <h6></h6>
    </section>
  );
}
