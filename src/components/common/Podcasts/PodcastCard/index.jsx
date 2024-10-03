import React from "react";
import "./styles.css"
import { Link } from "react-router-dom";
import { MdOutlineDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../../firebase";

function PodcastCard({id,title,displayImage}){

    const handleDeleteButton= async ()=>{
        try{
            await deleteDoc(doc(db, "podcasts", id));
            toast.success("Podcast Deleted Successfully!")
        }catch(e){
            toast.error(e.message);
        }
       

    }
    return (
   
      
        <div className="podcast-card">
            <Link to={`/podcast/${id}`}>
            <img className="display-image-podcast" src={displayImage}/>
            </Link>
            <div className="podcast-title-box">
            <p className="title-podcast">{title}</p>  <div className="delete-btn" onClick={handleDeleteButton}><MdOutlineDeleteForever size={20}/></div>
            </div>
        
        </div>
      
    )

}

export default PodcastCard;