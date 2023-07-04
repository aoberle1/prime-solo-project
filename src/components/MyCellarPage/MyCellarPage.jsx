import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import './MyCellarPage.css'
import { useHistory, Link } from 'react-router-dom';
import swal from 'sweetalert';



function MyCellarPage () {

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
        }).then ((willDelete) => {
            if (willDelete) {
                swal("Bottle Successfully removed", {
                    icon: "success",
                    timer: 1500,
                    buttons: false,
                });
                dispatch({type: 'DELETE_WINE', payload: id });
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
        dispatch({ type: 'EDIT_DETAILS', payload: id});
        history.push('/edit');
    };

    useEffect(() => {
        dispatch({ type: 'FETCH_WINE'})
    }, [])

    return (
        <div>
            <h2>My Cellar</h2>
            <div className='centering'>
            <p>Click the Add Some Wine Button to fill your Cellar!</p>
            <button className='btn btn-primary' onClick={() => history.push('/add')}>ADD SOME WINE!</button>
            </div>
            <br/>
            <br/>
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
                        <th colSpan={2}></th>
                    </tr>
                </thead>
                <tbody>
                    {cellar.map(bottle => (
                        <tr key={bottle.id}>
                            <td>{bottle.vineyard}</td>
                            <td>{bottle.vintage}</td>
                            <td>{bottle.name}</td>
                            <td>{bottle.price}</td>
                            <td>{bottle.place_bought}</td>
                            <td>{bottle.notes}</td>
                            <td>{bottle.rating}</td>
                            <td><button className='btn btn-danger' onClick={() => deleteWine(bottle.id)}>DELETE THIS BOTTLE</button></td>
                            <td onClick={() => handleEdit(bottle.id)}><button className='btn btn-secondary'>EDIT DETAILS</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            <br></br>
        </div>
    )
}

export default MyCellarPage