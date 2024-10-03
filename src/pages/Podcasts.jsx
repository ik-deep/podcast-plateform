import React, { useEffect, useState } from 'react'
import Header from '../components/common/Header'
import { QuerySnapshot, collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setPodcasts } from '../redux/slices/podcastSlice';
import PodcastCard from '../components/common/Podcasts/PodcastCard';
import InputComponent from "../components/common/Input";

const PodcastsPage = () => {
  const dispatch = useDispatch();
  const podcasts = useSelector((state)=> state.podcasts.podcasts);
  const [search,setSearch] = useState("");

  useEffect(()=>{
    const unsubscribe = onSnapshot(
      query(collection(db,"podcasts")),
      (QuerySnapshot) =>{
        const podcastsData = [];
        QuerySnapshot.forEach((doc)=>{
          podcastsData.push({id: doc.id, ...doc.data()});
        })
         dispatch(setPodcasts(podcastsData))
      },
      (error)=>{
        console.error("Error fetching podcasts:", error);
      }
    );
    return ()=>{
      unsubscribe();
    };
  },[dispatch,search]);

  var filteredPodcasts = podcasts.filter((item)=>{
  return  item.title.trim().toLowerCase().includes(search.trim().toLowerCase());
  })
  console.log(search);
console.log(filteredPodcasts);
  return (
    <div>
        <Header/>
        <div className='input-wrapper1' style={{marginTop:"2rem"}}>
        <h1>Discover podcasts</h1>
        
        <InputComponent
          state={search}
          setState={setSearch}
          placeholder={"Search By Title"}
          type="text"
         
        />
        {filteredPodcasts.length>0?(
          <div className='podcast-flex'  style={{marginTop:"2rem"}}>
          {filteredPodcasts.map((item)=>{
            return <PodcastCard
            key={item.id}
            id={item.id}
            title={item.title}
            displayImage={item.displayImage}
            />
          })}
          </div>
        ):(
          <p style={{marginTop:"1rem"}}>{search?"Podcast not found!":"No Current Podcasts!"}</p>
        )}
        </div>
     
    </div>
  )
}

export default PodcastsPage