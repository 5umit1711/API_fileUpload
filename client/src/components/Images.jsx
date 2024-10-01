import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const Images = ({ imageSrc, name, id }) => {
  const handleDownload = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3000/download/${id}`, {
        responseType: "blob",
      });
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${name}.jpeg`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="w-96 h-auto rounded-lg overflow-hidden shadow-lg p-2 bg-blue-200">
      <img
        className="w-full border border-slate-600 rounded-xl"
        src={imageSrc}
        alt={name}
      />
      <div className="flex w-full justify-center mt-1">
        <div className="font-bold text-xl mb-2">{name}</div>
      </div>
      <div className="flex w-full justify-center">
        <button
          className="inline-block bg-slate-500 text-white px-2 py-2 rounded-lg hover:bg-blue-700"
          onClick={() => handleDownload(id)}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default Images;
