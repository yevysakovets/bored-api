/* eslint-disable no-restricted-globals */
import { useState} from 'react';
import './BorderForm.css'
import Activity from './Activity';
import ActivityHistory from './ActivityHistory';
function BoredForm() {
    let url = "http://www.boredapi.com/api/activity/";
    const [randomActivity, setRandomActivity] = useState('');
    const [activityHistory, setActivityHistory] = useState([]);
    const [showHistory, setShowHistory] = useState(true);
    let returnedActivityObject;

    function getActivity() {

        fetch(url)
        .then(function (resp) {
            return resp.json();
        }).then(function(data) {
            returnedActivityObject = data;
            setRandomActivity(returnedActivityObject.activity);
            setActivityHistory(activityHistory => [...activityHistory, returnedActivityObject.activity + "\n"]);
        })
    }

    function clearActivityHandler() {
        setRandomActivity(null);
        setActivityHistory([]);
    }

    return (
        <div className='page'>
            <div>
            <button onClick={getActivity}>Find Activity</button>
            <button onClick={clearActivityHandler}>Clear Activities</button>
            <button onClick={() => setShowHistory(!showHistory)}>Show/Hide History</button>
            </div>
            <br></br>
            <div>
                <Activity activity={randomActivity} />
            </div>
            <div>
                {showHistory && <ActivityHistory activityHistory={activityHistory}/>}
            </div>
        </div>
    );
}

export default BoredForm;