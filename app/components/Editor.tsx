"use client";
import React from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

// Create a dynamic import of ReactQuill component
const DynamicReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ align: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "align",
];

export function MyEditor({ onChange, content }: any) {
  return (
    <div className="h-96">
      {/* Render the dynamic ReactQuill component */}
      <DynamicReactQuill
        style={{ height: "20rem" }}
        value={content}
        modules={modules}
        formats={formats}
        onChange={onChange}
      />
    </div>
  );
}

export default MyEditor;
