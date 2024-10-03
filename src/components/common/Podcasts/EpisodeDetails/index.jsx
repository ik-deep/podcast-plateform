import React from "react";
import './styles.css';
import Button from "../../Button";


const EpisodeDetails = ({title,description,audioFile, onClick, index}) =>{

    return (
        <div style={{width:"95%"}}>
            <h2 style={{textAlign:" left", marginBottom:0}}>{index}. {title}</h2>
            <p style={{color:"var(--purple-grey)", marginLeft:"1rem"}}>{description}</p>
            <Button 
            text={"Play"}
            onClick={()=> onClick(audioFile)}
            style={{ marginLeft: "1rem", width: "35px", marginBottom:"2rem" }}
            />
            <hr/>
        </div>
    )
}

export default EpisodeDetails;