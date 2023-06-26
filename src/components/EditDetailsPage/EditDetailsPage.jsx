import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function EditDetailsPage () {

    const dispatch = useDispatch();
    const history = useHistory();

    const [newVineyard, setNewVineyard] = useState('');
    const [newVintage, setNewVintage] = useState(0);
    const [newGrape, setNewGrape] = useState(0);
    const [newPrice, setNewPrice] = useState(0);
    const [newPlace_bought, setNewPlace_Bought] = useState('');
    const [newNotes, setNewNotes] = useState('');
    const [newRating, setNewRating] = useState(0);

    return (
        <div>
        <form onSubmit={(event) => editWine(event)}>
            <label>Vineyard / Brand *</label>
            <input
                type="text"
                value={vineyard}
                onChange={(event) => setNewVineyard(event.target.value)}
                required
            />
            <br/>
            <label>Vintage *</label>
            <input
                type="number"
                value={vintage}
                onChange={(event) => setNewVintage(event.target.value)}
                max="2023"
                maxLength="4"
                required
            />
            <br/>
            <label>Grape Name *</label>
            <select required value={grape} onChange={(event) => setNewGrape(event.target.value)}>
                <option value={0}> --Select a category </option>
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
            <br/>
            <label>Price</label>
            <input
                type="number"
                value={price}
                onChange={(event) => setNewPrice(event.target.value)}
            />
            <br/>
            <label>Location Purchased</label>
            <input
                type="text"
                value={place_bought}
                onChange={(event) => setNewPlace_Bought(event.target.value)}
            />
            <br/>
            <label>Tasting Notes</label>
            <input
                type="text"
                value={notes}
                onChange={(event) => setNewNotes(event.target.value)}
            />
            <br/>
            <label>My Rating (1-10)</label>
            <input
                type="number"
                min="0"
                max="10"
                value={rating}
                onChange={(event) => setNewRating(event.target.value)}
            />
            <br/>
            <input type='submit' value='Submit Your Edits!'></input>
        </form>
        </div>
    )

}

export default EditDetailsPage;