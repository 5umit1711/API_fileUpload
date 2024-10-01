import React, { useEffect, useState } from "react";
import Images from "./Images";
import { toast } from "react-toastify";
import axios from "axios";

const Home = ()=>{
    const [fileData, setData] = useState([]);
    
    useEffect(()=>{
        const getData = async()=>{
            try{
                const res = await axios.get("http://localhost:3000/getAllFiles");
                console.log(res.data)
                if(res.data.success){
                    setData(res.data.file);
                }
            }catch(error){
                toast.error(error.message);
            }
        }
        getData();
    }, []);

    return <div className="m-2 flex gap-2">
        {fileData.map(item => (
        <Images
          key={item._id}
          imageSrc={item.file}
          name={item.name}
          id = {item._id}
        />
      ))}
    </div>
}

export default Home;