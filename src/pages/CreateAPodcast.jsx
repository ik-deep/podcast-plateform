import React from "react";
import Header from "../components/common/Header";
import CreateAPodcastForm from "../components/common/StartAPodcast/CreateAPodcast";

const CreateAPodcastPage = () => {
  return (
    <div>
        <Header/>
        <div className="input-wrapper">
       <h1>Craete A Podcast</h1>
        <CreateAPodcastForm/>
       </div>
    </div>
  
  )
    
};

export default CreateAPodcastPage;
