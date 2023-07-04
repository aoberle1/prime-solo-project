import React, { useEffect } from 'react';
import AddWineForm from '../AddWineForm/AddWineForm';
import CancelButton from '../CancelButtons/CancelButtons';
import './AddWinePage.css'


function AddWinePage() {

    return (
        <div>
            <h2>Enter New Wine Information Here!</h2>
            <br></br>
            <h5>Check out the picture to see some tips on where to look on a bottle's label
                for the required information!
            </h5>
            <br/>
            <h5>To cancel and go back, click cancel at the bottom of the page!</h5>
            <br/>
            <AddWineForm />
            <CancelButton />
        </div>
    )
}

export default AddWinePage;