import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CancelButton from '../CancelButtons/CancelButtons';
import swal from 'sweetalert';

function AddWineForm() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [vineyard, setVineyard] = useState('');
    const [vintage, setVintage] = useState(0);
    const [grape, setGrape] = useState(0);
    const [price, setPrice] = useState(0);
    const [place_bought, setPlace_Bought] = useState('');
    const [notes, setNotes] = useState('');
    const [rating, setRating] = useState(0);

    function submitWine(event) {
        event.preventDefault();
        console.log('Values to be submitted are:', vineyard, vintage, grape, price, place_bought, notes, rating);

        let newWine = {
            vineyard,
            vintage,
            grape,
            price,
            place_bought,
            notes,
            rating
        };
        console.log('newWine being submitted is:', newWine)

        
        swal({
            title: "Are you sure you want to add this wine to your cellar?",
            text: "Click Ok to add your wine, click cancel to change some info",
            icon: "info",
            buttons: true,
            dangerMode: false
        }).then((willAdd) => {
            if (willAdd) {
                swal("Bottle was successfully added to your cellar!", {
                    icon: "success",
                });
                dispatch({ type: 'SUBMIT_WINE', payload: newWine });
                history.push('/cellar');
            } else {
                swal("Add wine canceled, change some info!")
            }
        })
    };


    return (
        <form className="formPanel" onSubmit={(event) => submitWine(event)}>
            <label className='form-label'>Vineyard / Brand *</label>
            <input
                className='form-control'
                placeholder='Example: Kendall Jackson'
                type="text"
                value={vineyard}
                onChange={(event) => setVineyard(event.target.value)}
                required
            />
            <br />
            <label className='form-label'>Vintage *</label>
            <input
                className='form-control'
                placeholder='Example: 2023'
                type="number"
                value={vintage}
                onChange={(event) => setVintage(event.target.value)}
                min="1"
                max="2023"
                maxLength="4"
                required
            />
            <br />
            <label className='form-label'>Grape Name *</label>
            <select 
            className='form-control'
            required 
            value={grape} 
            onChange={(event) => setGrape(event.target.value)}>
                <option value=""> -- Click to select a grape! </option>
                <option value={1}> Cabernet Sauvignon</option>
                <option value={2}> Merlot</option>
                <option value={3}> Pinot Noir</option>
                <option value={4}> Syrah</option>
                <option value={5}> Malbec</option>
                <option value={6}> Zinfandel</option>
                <option value={7}> Chardonnay</option>
                <option value={8}> Riesling</option>
                <option value={9}> Pinot Grigio</option>
                <option value={10}> Sauvignon Blanc</option>
                <option value={11}> Chenin Blanc</option>
                <option value={12}> Moscato</option>
            </select>
            <br />
            <label className='form-label'>Price</label>
            <input
                min="0"
                className='form-control'
                type="number"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
            />
            <br />
            <label className='form-label'>Location Purchased</label>
            <input
                className='form-control'
                type="text"
                value={place_bought}
                onChange={(event) => setPlace_Bought(event.target.value)}
            />
            <br />
            <label className='form-label'>Tasting Notes</label>
            <input
            placeholder='Example: Delicious - tastes like grapefruit!'
                className='form-control'
                type="text"
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
            />
            <br />
            <label className='form-label'>My Rating (1-10)</label>
            <input
                className='form-control'
                type="number"
                min="0"
                max="10"
                value={rating}
                onChange={(event) => setRating(event.target.value)}
            />
            <br />
            <input type='submit' value='Add Bottle To Your Cellar!'></input>
        </form>
    )

}

export default AddWineForm