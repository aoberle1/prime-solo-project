import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CancelButton from '../CancelButtons/CancelButtons';
import AddWineForm from '../AddWineForm/AddWineForm';


function AddWinePage() {

    return (
        <div>
            <h3>Enter New Wine Information Here!</h3>
            <AddWineForm />
        </div>
    )
}

export default AddWinePage;