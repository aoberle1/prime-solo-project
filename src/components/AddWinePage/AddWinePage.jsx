import React, { useEffect } from 'react';
import AddWineForm from '../AddWineForm/AddWineForm';
import CancelButton from '../CancelButtons/CancelButtons';
import './AddWinePage.css'


function AddWinePage() {

    return (
        <div>
            <h2>Enter New Wine Information Here!</h2>
            <br/>
            <h5>To cancel and go back, click cancel at the bottom of the page!</h5>
            <br/>
            <p>Required fields are indicated by a *</p>
            <AddWineForm />
        </div>
    )
}

export default AddWinePage;