import { useHistory } from "react-router-dom"

function CancelButton () {

    const history = useHistory();

    function cancelAddWine () {
        history.goBack()
    };



    return (
        <div>
            <button onClick={() => cancelAddWine}>Cancel - Go Back To My Cellar!</button>
        </div>
    )
};

export default CancelButton