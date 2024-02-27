import React, { useState } from "react";

const FileInput = ({ accept, id, fileHandleFnc }) => {
   const [fileSelected,setFileSelected] = useState(false);

   const onChange=(e)=>{
      setFileSelected(e.target.files[0].name);
   }

  return (
    <>
      <lable htmlFor={id} className="custom-input">{fileSelected?`The file ${fileSelected} Selected`:"Import Image"}</lable>
      <input type="file" accept="accept" id={id} style={{ display: "none" }}  onChange={onChange}/>
    </>
  );
};

export default FileInput;
