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
            text: "Click OK to remove this wine from your cellar",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then ((willDelete) => {
            if (willDelete) {
                swal("Bottle Successfully removed", {
                    icon: "success",
                });
                dispatch({type: 'DELETE_WINE', payload: id });
            } else {
                swal("Delete canceled!")
            }
        })
    };

    function handleEdit(id) {
        dispatch({ type: 'EDIT_DETAILS', payload: id});
        // history.push('/edit');
    };

    useEffect(() => {
        dispatch({ type: 'FETCH_WINE'});
    }, [])

    return (
        <div className='center'>
            <h3 className='center'>My Cellar</h3>
            <table className='center'>
                <thead>
                    <tr>
                        <th>Vineyard / Brand</th>
                        <th>Vintage</th>
                        <th>Grape</th>
                        <th>Price</th>
                        <th>Purchased Where?</th>
                        <th>Notes</th>
                        <th>Rating</th>
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
                            <td><button onClick={() => deleteWine(bottle.id)}>DELETE THIS BOTTLE</button></td>
                            <td onClick={() => handleEdit(bottle.id)}><Link to="/edit"><button>EDIT DETAILS</button></Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br></br>

            <button onClick={() => history.push('/add')}>ADD SOME WINE!</button>
        </div>
    )
}

export default MyCellarPage