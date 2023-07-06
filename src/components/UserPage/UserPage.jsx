import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import './UserPage.css'
import { Card, CardMedia } from '@mui/material';
import { Box } from '@mui/material';
import { CardContent } from '@mui/material';
import { Typography } from '@mui/material';

function UserPage() {
  const user = useSelector((store) => store.user);
  const wineCount = useSelector((store) => store.wineCount);
  const favorites = useSelector((store) => store.favorites);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_CELLAR_COUNT' });
    dispatch({ type: 'FETCH_FAV' });
  }, [])

  return (
    <div className="container">
      <h1 className='centering'>Welcome, {user.username}!</h1>
      <br />
      <p>Press the Go To Cellar Button to check out your collection, or press the Add Wine button
        to get started adding a bottle of wine to your collection!
      </p>
      <br />
      <div className='user_center'>
        <button className='premade_btn' onClick={() => history.push('/cellar')}>Go To Cellar</button>
      </div>
      <br />
      <br />
      <p>You have {wineCount.count} bottles of wine in your collection!</p>
      <br />
      <p>Here are your 5 best rated bottles in your collection!</p>
      <br />
      <div className='card_map'>
          {favorites.map(fav => (
            <div>
              <Box>
                {fav.grape_id <= 6 ? (
                  <Card variant="outlined"
                    style={{
                      backgroundColor: "rgb(136, 8, 8)",
                      color: "white",
                    }}>
                    <CardMedia
                      sx={{ height: 100 }}
                      image="https://www.foodandwine.com/thmb/B6XvMMR6r9OcAETGgp2ypqK_-wI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/red-wine-blends-FT-MAG1116-2000-4f3c3e91bcd646ea8a21f2152746ef53.jpg"
                    >
                    </CardMedia>
                    <CardContent>
                      <Typography sx={{ fontSize: "1.5rem" }}>
                        {fav.vineyard}
                      </Typography>
                      <Typography sx={{ fontSize: "1.2rem" }}>
                        {fav.vintage}
                      </Typography>
                      <Typography sx={{ fontSize: "1.2rem" }}>
                        {fav.name}
                      </Typography>
                      <br />
                      <Typography sx={{ fontSize: "1.2rem" }}>
                        Your Rating: {fav.rating}
                      </Typography>
                    </CardContent>
                  </Card>
                ) : (
                  <Card variant="outlined"
                    style={{
                      backgroundColor: "rgb(255, 235, 200)",
                      color: "rgb(136, 8, 8)",
                    }}>
                    <CardMedia
                      sx={{ height: 100 }}
                      image="https://as2.ftcdn.net/v2/jpg/02/29/23/91/1000_F_229239192_KipmCaOAh4QZzS73KOIVoi75eGQAUECf.jpg"
                    >
                    </CardMedia>
                    <CardContent>
                      <Typography sx={{ fontSize: "1.5rem" }}>
                        {fav.vineyard}
                      </Typography>
                      <Typography sx={{ fontSize: "1.2rem" }}>
                        {fav.vintage}
                      </Typography>
                      <Typography sx={{ fontSize: "1.2rem" }}>
                        {fav.name}
                      </Typography>
                      <br />
                      <Typography sx={{ fontSize: "1.2rem" }}>
                        Your Rating: {fav.rating}
                      </Typography>
                    </CardContent>
                  </Card>
                )}
              </Box>
            </div>
          ))}
      </div>
      <br />
      <br />
      <div className='user_center'>
        <LogOutButton className="premade_btn" />
      </div>
    </div>
  );
}

export default UserPage;
