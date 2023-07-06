import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './MyCellarPage.css'
import { useHistory, Link } from 'react-router-dom';
import swal from 'sweetalert';
import { Card, CardMedia, Box, CardContent, Typography, CardActions, Button } from '@mui/material';
import { DeleteForever, EditNote } from '@mui/icons-material'


function MyCellarPage() {

    const dispatch = useDispatch();
    const history = useHistory();

    const cellar = useSelector(store => store.myWine);

    function deleteWine(id) {
        swal({
            title: "Are you sure you want to remove this wine from your cellar?",
            text: "Click the Remove button to remove this wine from your cellar",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            buttons: {
                cancel: "Cancel",
                confirm: "Remove"
            }
        }).then((willDelete) => {
            if (willDelete) {
                swal("Bottle Successfully removed", {
                    icon: "success",
                    timer: 1500,
                    buttons: false,
                });
                dispatch({ type: 'DELETE_WINE', payload: id });
            } else {
                swal("Delete canceled!", {
                    icon: "info",
                    timer: 1500,
                    buttons: false,
                })
            }
        })
    };

    function handleEdit(id) {
        dispatch({ type: 'EDIT_DETAILS', payload: id });
        history.push('/edit');
    };

    useEffect(() => {
        dispatch({ type: 'FETCH_WINE' })
    }, [])

    return (
        <div>
            <h1 className='centering'>My Cellar</h1>
            <div className='centering'>
                <p>Click the Add Some Wine Button below or the Add Wine link in the navigation bar to fill your Cellar!</p>
                <br />
                {/* <button className='btn btn-primary' onClick={() => history.push('/add')}>ADD SOME WINE!</button> */}
                <Button variant="contained" size='large' onClick={() => history.push('/add')}>ADD SOME WINE</Button>

            </div>
            <br />
            <br />
            <div>
                <table className="table_center">
                    <thead>
                        <tr>
                            <th>Vineyard / Brand</th>
                            <th>Vintage</th>
                            <th>Grape</th>
                            <th>Price</th>
                            <th>Purchased Where?</th>
                            <th>Notes</th>
                            <th>Rating</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cellar.map(bottle => (
                            <tr key={bottle.id} style={bottle.grape_id <= 6 ? (
                                {
                                    backgroundColor: "rgb(136, 8, 8)",
                                    color: "white",
                                }
                            ) : (
                                {
                                    backgroundColor: "rgb(255, 235, 200)",
                                    color: "rgb(136, 8, 8)",
                                }
                            )}>
                                <td>{bottle.vineyard}</td>
                                <td>{bottle.vintage}</td>
                                <td>{bottle.name}</td>
                                {/* <td>{bottle.price = 0 ? (
                                    '-'
                                ) : (
                                    bottle.price
                                )} </td> */}
                                <td>{bottle.price}</td>
                                <td>{bottle.place_bought}</td>
                                <td>{bottle.notes}</td>
                                <td>{bottle.rating}</td>
                                {/* <td><button className='btn btn-danger' onClick={() => deleteWine(bottle.id)}>DELETE THIS BOTTLE</button></td> */}
                                {/* <td onClick={() => handleEdit(bottle.id)}><button className='btn btn-secondary'>EDIT DETAILS</button></td> */}
                                <td onClick={() => handleEdit(bottle.id)} className='table_edit_hover'><EditNote /></td>
                                <td onClick={() => deleteWine(bottle.id)} className='table_delete_hover'><DeleteForever /></td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
            <br />

            
            {/* Beginning MUI card map layout */}
            {/* <Box className='cellar_flex_map'>
                {cellar.map(bottle => (
                    <Card className='flex_child' sx={{ maxWidth: 350 }}>
                        <CardMedia
                            sx={{ height: 100 }}
                            image="https://www.foodandwine.com/thmb/B6XvMMR6r9OcAETGgp2ypqK_-wI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/red-wine-blends-FT-MAG1116-2000-4f3c3e91bcd646ea8a21f2152746ef53.jpg"
                        >
                        </CardMedia>
                        <CardContent>
                            <Typography>
                                {bottle.vineyard}
                            </Typography>
                            <Typography>
                                {bottle.vintage}
                            </Typography>
                            <Typography>
                                {bottle.name}
                            </Typography>
                            <Typography>
                                Price: ${bottle.price}
                            </Typography>
                            <Typography>
                                Purchased: {bottle.place_bought}
                            </Typography>
                            <Typography>
                                Notes: {bottle.notes}
                            </Typography>
                            <Typography>
                                My Rating: {bottle.rating}/10
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={() => deleteWine(bottle.id)}>DELETE THIS BOTTLE</Button>
                            <Button onClick={() => handleEdit(bottle.id)}>EDIT THIS BOTTLE</Button>
                        </CardActions>
                    </Card>
                ))}
            </Box> */}
            <br></br>
        </div>
    )
}

export default MyCellarPage