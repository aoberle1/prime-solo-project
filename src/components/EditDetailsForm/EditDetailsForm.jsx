import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';

function EditDetailsForm () {

    const dispatch = useDispatch();
    const history = useHistory();
    const details = useSelector(store => store.details);

    console.log('details is:', details);

    const [newVineyard, setNewVineyard] = useState('');
    const [newVintage, setNewVintage] = useState(0);
    const [newGrape, setNewGrape] = useState(0);
    const [newPrice, setNewPrice] = useState(0);
    const [newPlace_bought, setNewPlace_Bought] = useState('');
    const [newNotes, setNewNotes] = useState('');
    const [newRating, setNewRating] = useState(0);

    function submitChanges(event){
        let newDetails = {
            id: details.id,
            vineyard: newVineyard,
            vintage: newVintage,
            grape_id: newGrape,
            price: newPrice,
            place_bought: newPlace_bought,
            notes: newNotes,
            rating: newRating
        };
        console.log('values of newDetails is:', newDetails);
        swal({
            title: "Are you ready to submit your changes?",
            text: "Click Ok to submit your changes, or cancel to change the wine info!",
            icon: "info",
            buttons: true,
            dangerMode: false,
        }).then((willDelete) => {
            if(willDelete) {
                swal("Bottle information successfully changed!", {
                    icon: "success",
                });
                dispatch({ type: 'SUBMIT_CHANGES', payload: newDetails});
                history.push('/cellar');
            } else {
                swal("Submit Canceled")
            }
        })
    };

    useEffect(() => {
        setNewVineyard(details.vineyard);
        setNewVintage(details.vintage);
        setNewGrape(details.grape_id);
        setNewPrice(details.price);
        setNewPlace_Bought(details.place_bought);
        setNewNotes(details.notes);
        setNewRating(details.rating);
    }, [details])

    return (
        <form className="formPanel" onSubmit={(event) => submitChanges(event)}>
        <label className='form-label'>Vineyard / Brand *</label>
        <input
        className='form-control'
            type="text"
            value={newVineyard}
            onChange={(event) => setNewVineyard(event.target.value)}
            required
        />
        <br/>
        <label className='form-label'>Vintage *</label>
        <input
        className='form-control'
            type="number"
            value={newVintage}
            onChange={(event) => setNewVintage(event.target.value)}
            max="2023"
            maxLength="4"
            required
        />
        <br/>
        <label className='form-label'>Grape Name *</label>
        <select className='form-control' required value={newGrape} onChange={(event) => setNewGrape(event.target.value)}>
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
        <label className='form-label'>Price</label>
        <input
        className='form-control'
            type="number"
            value={newPrice}
            onChange={(event) => setNewPrice(event.target.value)}
        />
        <br/>
        <label className='form-label'>Location Purchased</label>
        <input
        className='form-control'
            type="text"
            value={newPlace_bought}
            onChange={(event) => setNewPlace_Bought(event.target.value)}
        />
        <br/>
        <label className='form-label'>Tasting Notes</label>
        <input
        className='form-control'
            type="text"
            value={newNotes}
            onChange={(event) => setNewNotes(event.target.value)}
        />
        <br/>
        <label className='form-label'>My Rating (1-10)</label>
        <input
        className='form-control'
            type="number"
            min="0"
            max="10"
            value={newRating}
            onChange={(event) => setNewRating(event.target.value)}
        />
        <br/>
        <input type='submit' value='Submit Your Edits!'></input>
    </form>
    )
};

export default EditDetailsForm;