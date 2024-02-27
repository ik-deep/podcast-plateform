import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import { toast } from "react-toastify";
import InputComponent from "../Input";

const CreateAPodcastForm = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [displayImage, setDisplayImage] = useState();
  const [bannerImage, setBannerImage] = useState();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();


const handleSubmit =() =>{
    setLoading
    toast.success("Handling Form")
}

  return (
    <>
      <InputComponent
        state={title}
        setState={setTitle}
        placeholder={"Title"}
        type="text"
        required={true}
      />
      <InputComponent
        state={desc}
        setState={setDesc}
        placeholder={"Description"}
        type="text"
        required={true}
      />
       <InputComponent
        state={displayImage}
        setState={setDisplayImage}
        placeholder={"Display Image"}
        type="file"
        required={true}
      />
      <Button text={loading ? "Loading...":"Create Podcast"}
           disabled={loading}
           onClick={handleSubmit}
      /> 
    </>
  );
};

export default CreateAPodcastForm;
