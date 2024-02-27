import React from 'react'
import Header from '../components/common/Header'
import { useSelector } from 'react-redux'
import Button from '../components/common/Button'
import { signOut } from 'firebase/auth'
import { toast } from 'react-toastify'
import { auth } from '../firebase'

const Profile = () => {
    const user = useSelector((state) => state.user.user)
    if(!user){
      return <p>Loading...</p>;
   }

   const handleLogout=()=>{
    signOut(auth).then(()=>{
       toast.success("User Logged Out!");
    }).catch((error)=>{
      toast.success(error.message);
    })
   }

  return (
    <div>
        <Header/>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
        <h1>{user.uid}</h1>
        <Button text={"Logout"} onClick={handleLogout}/>

    </div>
  )
}

export default Profile