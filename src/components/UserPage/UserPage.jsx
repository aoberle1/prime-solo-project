import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom"


function UserPage() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
}, [])

  return (
    <div className="container">
      <h1 className='centering'>Welcome, {user.username}!</h1>
      <p>Press the Go To Cellar Button to check out your collection, or press the Add Wine button
        to get started adding a bottle of wine to your collection!
      </p>
      <br/>
      <p>You have {} bottles of wine in your collection!</p>
      <br/>
      <p>You have rated {} bottles of wine in your collection, nice job!</p>
      <br/>
      
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="premade_btn" />
    </div>
  );
}

export default UserPage;
