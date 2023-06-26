import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import './MyCellarPage.css'
import { useHistory } from 'react-router-dom';


function MyCellarPage () {

    const dispatch = useDispatch();
    const history = useHistory();

    const cellar = useSelector(store => store.myWine);



    useEffect(() => {
        dispatch({ type: 'FETCH_WINE'});
    }, [])

    return (
        <div>
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
                            <td><button>DELETE</button></td>
                            <td><button>EDIT</button></td>
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