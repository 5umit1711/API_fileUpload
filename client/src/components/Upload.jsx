import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Upload = () => {
  const [data, setData] = useState({
    file: null,
    name: "",
  });

  const handleSubmit = async () => {
    try {
      if (data.file === null || data.name === "") {
        toast.error("Fill all the fields");
        return;
      }
      const formData = new FormData();
      formData.append("file", data.file);
      formData.append("name", data.name);
      const res = await axios.post("http://localhost:3000/sendFile", formData);
      console.log(res);
      if (res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.messagge);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="h-[400px] w-full flex flex-col justify-center items-center flex-grpw">
      <div>
        <input
          onChange={(e) => setData({ ...data, file: e.target.files[0] })}
          type="file"
          className="file-input file-input-bordered file-input-secondary w-full max-w-xs"
        />
      </div>
      <div className="block mt-2">
        <input
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          type="text"
          placeholder="File name"
          className="input input-bordered input-secondary w-full max-w-xs"
        />
      </div>
      <div className="w-full max-w-xs flex justify-center mt-2">
        <button className="btn btn-active btn-secondary" onClick={handleSubmit}>
          Upload
        </button>
      </div>
    </div>
  );
};

export default Upload;
