import "./ActivityHistory.css";

function ActivityHistory(props) {
    let activityHistory = props.activityHistory;
    return (
        <div className="history container">
            <div className="space"></div>
            <div className="content">
            <h1>Activity History</h1>
                <ul>
                    {activityHistory.map((activity, index) => {
                        return <li key={index}>{activity}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
}

export default ActivityHistory;
