import React, { useEffect } from 'react';
import CancelButton from '../CancelButtons/CancelButtons';
import EditDetailsForm from '../EditDetailsForm/EditDetailsForm';

function EditDetailsPage () {
    
    return (
        <div>
        <EditDetailsForm />
        <CancelButton />
        </div>
    )

}

export default EditDetailsPage;