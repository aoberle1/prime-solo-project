import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import './UserPage.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card } from '@mui/material';
import { Box } from '@mui/material';
import { CardActions } from '@mui/material';
import { CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import { useState } from 'react';

function UserPage() {
  const user = useSelector((store) => store.user);
  const wineCount = useSelector((store) => store.wineCount);
  const favorites = useSelector((store) => store.favorites);

  const dispatch = useDispatch();
  const history = useHistory();

  const theme = createTheme({
    palette: {
      primary: {
        main: 'rgb(136, 8, 8)',
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
      // background: {
      //   paper: 'rgb(136, 8, 8)', // your color
      // },
    },
  });

  const isWhite = false;

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
          <ThemeProvider theme={theme}>
            {favorites.map(fav => (
                      <div>
                          <Box>
                          {fav.grape_id <= 6 ? (
                            <Card variant="outlined"
                            style={{
                            backgroundColor: "rgb(136, 8, 8)",
                            color: "white",
                            }}>
                            <CardContent>
                              <Typography sx={{ fontSize: "1.5rem"}}>
                                {fav.vineyard}
                              </Typography>
                              <Typography sx={{ fontSize: "1.2rem"}}>
                                {fav.vintage}
                              </Typography>
                              <Typography sx={{ fontSize: "1.2rem"}}>
                                {fav.name}
                              </Typography>
                              <Typography sx={{ fontSize: "1.2rem"}}>
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
                            <CardContent>
                              <Typography sx={{ fontSize: "1.5rem"}}>
                                {fav.vineyard}
                              </Typography>
                              <Typography sx={{ fontSize: "1.2rem"}}>
                                {fav.vintage}
                              </Typography>
                              <Typography sx={{ fontSize: "1.2rem"}}>
                                {fav.name}
                              </Typography>
                              <Typography sx={{ fontSize: "1.2rem"}}>
                                Your Rating: {fav.rating}
                              </Typography>
                            </CardContent>
                          </Card>
                          )}
                        </Box>
                        </div>
            ))}
          </ThemeProvider>
      </div>
      <br />
      <p>Your ID is: {user.id}</p>
      <div className='user_center'>
        <LogOutButton className="premade_btn" />
      </div>
    </div>
  );
}

export default UserPage;
