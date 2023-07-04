import React, { useEffect } from 'react';
import CancelButton from '../CancelButtons/CancelButtons';
import EditDetailsForm from '../EditDetailsForm/EditDetailsForm';

function EditDetailsPage () {
    
    return (
        <div>
        <h2>Edit Wine Details</h2>
        <br></br>
        <EditDetailsForm />
        <CancelButton />
        </div>
    )

}

export default EditDetailsPage;