import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import './MyCellarPage.css'


function MyCellarPage () {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_WINE'});
    }, [])

    return (
        <div>
            <table className='center'>
                <thead>
                    <tr>
                        <th>Vinyard</th>
                        <th>Vintage</th>
                        <th>Grape</th>
                        <th>Price</th>
                        <th>Purchased Where?</th>
                        <th>Notes</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    )
}

export default MyCellarPage