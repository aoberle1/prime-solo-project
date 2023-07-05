import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import './UserPage.css'


function UserPage() {
  const user = useSelector((store) => store.user);
  const wineCount = useSelector((store) => store.wineCount);
  const dispatch = useDispatch();
  const history = useHistory();



  useEffect(() => {
    dispatch({ type: 'FETCH_CELLAR_COUNT'});
}, [])

  return (
    <div className="container">
      <h1 className='centering'>Welcome, {user.username}!</h1>
      <br/>
      <p>Press the Go To Cellar Button to check out your collection, or press the Add Wine button
        to get started adding a bottle of wine to your collection!
      </p>
      <br/>
      <div className='user_center'>
      <button className='premade_btn' onClick={() => history.push('/cellar')}>Go To Cellar</button>
      </div>
      <br/>
      <br/>
      <p>You have {wineCount.count} bottles of wine in your collection!</p>
      <br/>
      <p>You have rated {} bottles of wine in your collection, nice job!</p>
      <br/>
      
      <p>Your ID is: {user.id}</p>
      <div className='user_center'>
      <LogOutButton className="premade_btn" />
      </div>
    </div>
  );
}

export default UserPage;
