import React, { useEffect } from 'react';
import AddWineForm from '../AddWineForm/AddWineForm';
import CancelButton from '../CancelButtons/CancelButtons';
import './AddWinePage.css'


function AddWinePage() {

    return (
        <div>
            <h3>Enter New Wine Information Here!</h3>
            <AddWineForm />
            <CancelButton />
        </div>
    )
}

export default AddWinePage;