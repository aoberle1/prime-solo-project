import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';

function EditDetailsForm() {

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

    function submitChanges(event) {

        event.preventDefault();

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
        }).then((willChange) => {
            if (willChange) {
                swal("Bottle information successfully changed!", {
                    icon: "success",
                });
                dispatch({ type: 'SUBMIT_CHANGES', payload: newDetails });
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
    }, [details]);

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
            <p className='form-text'>Required</p>
            <br />
            <label className='form-label'>Vintage *</label>
            <select 
            className='form-control'
            required 
            value={newVintage} 
            onChange={(event) => setNewVintage(event.target.value)}>
                <option value=""> -- Click to select a Year! </option>
                <option value={2023}> 2023</option>
                <option value={2022}> 2022</option>
                <option value={2021}> 2021</option>
                <option value={2020}> 2020</option>
                <option value={2019}> 2019</option>
                <option value={2018}> 2018</option>
                <option value={2017}> 2017</option>
                <option value={2016}> 2016</option>
                <option value={2015}> 2015</option>
                <option value={2014}> 2014</option>
                <option value={2013}> 2013</option>
                <option value={2012}> 2012</option>
                <option value={2011}> 2011</option>
                <option value={2010}> 2010</option>
                <option value={2009}> 2009</option>
                <option value={2008}> 2008</option>
                <option value={2007}> 2007</option>
                <option value={2006}> 2006</option>
                <option value={2005}> 2005</option>
                <option value={2004}> 2004</option>
                <option value={2003}> 2003</option>
                <option value={2002}> 2002</option>
                <option value={2001}> 2001</option>
                <option value={2000}> 2000</option>
            </select>
            <p className='form-text'>Required</p>
            <br />
            <label className='form-label'>Grape Name *</label>
            <select className='form-control' required value={newGrape} onChange={(event) => setNewGrape(event.target.value)}>
                <option value=""> --Select a category </option>
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
            <p className='form-text'>Required</p>
            <br />
            <label className='form-label'>Price</label>
            <input
                className='form-control'
                type="number"
                min="0"
                value={newPrice}
                onChange={(event) => setNewPrice(event.target.value)}
            />
            <br />
            <label className='form-label'>Location Purchased</label>
            <input
                className='form-control'
                type="text"
                value={newPlace_bought}
                onChange={(event) => setNewPlace_Bought(event.target.value)}
            />
            <br />
            <label className='form-label'>Tasting Notes</label>
            <input
                className='form-control'
                type="text"
                value={newNotes}
                onChange={(event) => setNewNotes(event.target.value)}
            />
            <br />
            <label className='form-label'>My Rating (1-10)</label>
            <input
                className='form-control'
                type="number"
                min="0"
                max="10"
                value={newRating}
                onChange={(event) => setNewRating(event.target.value)}
            />
            <br />
            <input type='submit' value='Submit Your Edits!'></input>
        </form>
    )
};

export default EditDetailsForm;