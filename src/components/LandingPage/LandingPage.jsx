import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome to In Vino Veritas');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h1 className='centering'>{heading}</h1>
      <br/>
      <br/>
      <div className="grid">
        <div className="grid-col grid-col_8 padding_right">
          <img className='image_float_left' src='https://st.hzcdn.com/simgs/pictures/wine-cellars/stonelake-hensley-custom-building-group-img~8bd135f40cffc044_8-4152-1-b7ae2d8.jpg'/>
          <br/>
          <p className='text_styling'>
            Do you want to know more about wine but don't know where to start? Do you arrive
            at a restaurant but are intimidated by a massive list of wine from all over the world?
            Begin your journey into grape mastery right here by creating an account
            (completely free)
            and adding bottles of wine that you have purchased to your Cellar -
            your collection of both tasted and untasted wines.  You will be able to add
            details to each wine in your collection such as price, vintage, and your own personal
            notes and ratings to help keep track of your likes and dislikes!
          </p>

          <p className='text_styling'>
            Create your account now (still free) and soon you'll be ordering like a professional
            where you are!
          </p>
        </div>
        <div className="grid-col grid-col_4">
          <br/>
          <br/>
          <RegisterForm />
          <center>
            <h4>Already a Member?</h4>
            <button className="premade_btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
