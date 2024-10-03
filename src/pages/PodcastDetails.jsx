import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { collection, doc, getDoc, onSnapshot, query, QuerySnapshot } from "firebase/firestore";
import { auth, db } from "../firebase";
import Button from "../components/common/Button";
import EpisodeDetails from "../components/common/Podcasts/EpisodeDetails";
import AudioPlayer from "../components/common/Podcasts/AudioPlayer";
import Loader from "../components/common/Loader";


function PodcastDetails() {
    const [podcast, setPodcast] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const [episodes,setEpisodes] = useState([]);
    const [playingFile,setPlayingFile] = useState();


    useEffect(() => {
        if (id) {
            getData();
        }

    }, [id])
    const getData = async () => {
        try {
            const docRef = doc(db, "podcasts", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setPodcast({ id: id, ...docSnap.data() });
                toast.success("Podcast Found!");
            } else {
                toast.error("No such Podcast!");
                navigate("/podcasts");
            }
        } catch (e) {
            toast.error(e.message);
        }
    }

    useEffect(()=>{
        const unsubscribe = onSnapshot(
            query(collection(db,"podcasts", id, "episodes")),
            (querySnapshot)=>{
                const episodeData = [];
              
                querySnapshot.forEach((doc)=>{
                    episodeData.push({id:doc.id,...doc.data()});
                });
                console.log(episodeData);
                setEpisodes(episodeData);
            },
            (error)=>{
                console.log("Error fetching episodes:",error);
            }
        )

        return () =>{
            unsubscribe();
        } 
    },[id]);

    if(!id){
        return <Loader/>
    }
    // console.log(episodes);
    return (
        <div>
            <Header />
            <div className="podcast-details" style={{ marginTop: "0rem" }}>
                {podcast.id && (
                    <>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", margin: "1rem" }}>
                            <h1 className="podcast-title-heading">{podcast.title}</h1>
                            {podcast.createdBy === auth.currentUser.uid && (
                                <Button style={{ margin: 0, width: "200px" }}
                                text={"Create Episode"}
                                onClick={() => {
                                    navigate(`/podcast/${id}/create-episode`);

                                }}
                            />
                            )}
                        </div>

                        <div className="banner-wrapper">
                            <img src={podcast.bannerImage} />
                        </div>
                        <p className="podcast-disc">{podcast.description}</p>
                        <h1 className="podcast-title-heading">Episodes</h1>
                        {episodes&& episodes.length ? (
                            <>
                            {
                                episodes.map((episode,index)=>{
                                    return (
                                        <EpisodeDetails
                                        key={index}
                                        index={index + 1}
                                        title={episode.title}
                                        description={episode.description}
                                        audioFile={episode.audioFile}
                                        onClick={(file) => setPlayingFile(file)}
                                      />
                                    )
                                })
                            }
                            </>
                        ):(
                            <p>No Episodes!</p>
                        )
                    }
                    </>

                )}
            </div>
           {playingFile && 
             <AudioPlayer audioSrc={playingFile} image={podcast.displayImage} />}
        </div>
    )
}

export default PodcastDetails;