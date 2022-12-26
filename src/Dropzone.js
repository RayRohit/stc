import React from "react";
import { useDropzone } from "react-dropzone";
import { FaVideo } from "react-icons/fa";

export default function Dropzone(props) {
  
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const Videofiles = acceptedFiles.map((file) => (
    <h6 key={file.path}>{file.path}</h6>
  ));
  return {
    Videofiles,
    renderVideo:(
    <section className="container">
      <div
        {...getRootProps({ className: "dropzone" })}
        className="shadow p-3"
        style={{ background: "#FAFAFA",height:'136px' }}
      >
        <div className="fs-3 py-2 text-center">
          <FaVideo />
        </div>
        <input {...getInputProps()}/>
        <h6 className="text-center" style={{ color: "#BDBDBD",fontSize:'14px' }}>
          {Videofiles.length === 0 ? " Drag your video here " : Videofiles}
        </h6>
        </div>
    </section>
  )}
}
