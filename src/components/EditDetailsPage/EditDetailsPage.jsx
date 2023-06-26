import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function EditDetailsPage () {

    const dispatch = useDispatch();
    const history = useHistory();
    const details = useSelector(store => store.details);

    const [newVineyard, setNewVineyard] = useState(details.vineyard);
    const [newVintage, setNewVintage] = useState(details.vintage);
    const [newGrape, setNewGrape] = useState(details.grape);
    const [newPrice, setNewPrice] = useState(details.price);
    const [newPlace_bought, setNewPlace_Bought] = useState(details.place_bought);
    const [newNotes, setNewNotes] = useState(details.notes);
    const [newRating, setNewRating] = useState(details.rating);

    function submitChanges(event){
        event.preventDefault();

        let newDetails = {
            newVineyard,
            newVintage,
            newGrape,
            newPrice,
            newPlace_bought,
            newNotes,
            newRating
        };
        dispatch({ type: 'SUBMIT_CHANGES', payload: newDetails})
    }

    function runTest() {
        console.log('values of details are:', details);
    }

    return (
        <div>
        <form onSubmit={(event) => submitChanges(event)}>
            <label>Vineyard / Brand *</label>
            <input
                type="text"
                value={newVineyard}
                onChange={(event) => setNewVineyard(event.target.value)}
                required
            />
            <br/>
            <label>Vintage *</label>
            <input
                type="number"
                value={newVintage}
                onChange={(event) => setNewVintage(event.target.value)}
                max="2023"
                maxLength="4"
                required
            />
            <br/>
            <label>Grape Name *</label>
            <select required value={newGrape} onChange={(event) => setNewGrape(event.target.value)}>
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
                value={newPrice}
                onChange={(event) => setNewPrice(event.target.value)}
            />
            <br/>
            <label>Location Purchased</label>
            <input
                type="text"
                value={newPlace_bought}
                onChange={(event) => setNewPlace_Bought(event.target.value)}
            />
            <br/>
            <label>Tasting Notes</label>
            <input
                type="text"
                value={newNotes}
                onChange={(event) => setNewNotes(event.target.value)}
            />
            <br/>
            <label>My Rating (1-10)</label>
            <input
                type="number"
                min="0"
                max="10"
                value={newRating}
                onChange={(event) => setNewRating(event.target.value)}
            />
            <br/>
            <input type='submit' value='Submit Your Edits!'></input>
        </form>
        <button onClick={() => runTest()}>TESTER</button>
        </div>
    )

}

export default EditDetailsPage;