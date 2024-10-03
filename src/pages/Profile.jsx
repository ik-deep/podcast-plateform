import React, { useEffect } from 'react'
import Header from '../components/common/Header'
import { useSelector } from 'react-redux'
import LogoutButton from '../components/common/Logout'
import Loader from '../components/common/Loader'

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  console.log(user);
  if (!user) {
    return <Loader />;
  }


  return (
    <div>
      <Header />
      {user && <div className='profile-wrapper'>
        <h1>NAME: {user.name}</h1>
        <h1>EMAIL ID: {user.email}</h1>
        <h1>USER ID: {user.uid}</h1>
      </div>}
      <LogoutButton />

    </div>
  )
}

export default Profile