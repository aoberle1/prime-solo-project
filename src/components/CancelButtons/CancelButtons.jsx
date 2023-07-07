import './CancelButtons.css'
import { useHistory } from "react-router-dom"
import swal from 'sweetalert';
import { Button } from "@mui/material";

// creating reusable cancel button
function CancelButton() {

    const history = useHistory();

    // function that is run when button in return is clicked
    function cancelAddWine() {
        // sweet alert for user to confirm they want to cancel 
        swal({
            title: "Are you sure you want to cancel?",
            text: "Click OK to cancel and go back to My Cellar",
            icon: "warning",
            buttons: true,
            dangerMode: false,
        }).then((willCancel) => {
            // if user confirms the cancel action
            if (willCancel) {
                // go back to previous page
                history.goBack()
            } else {
                swal("You decided to finish your task, good job!")
            }
        })
    };

    return (
        // <div>
        //     <button className="btn btn-secondary" type="button" onClick={() => cancelAddWine()}>Cancel - Go Back To My Cellar!</button>
        // </div>
        <div className='cancel_padding'>
            <Button variant='outlined' type='button' onClick={() => cancelAddWine()}>Cancel</Button>
        </div>
    )
};

export default CancelButton