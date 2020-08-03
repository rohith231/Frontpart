import React from 'react';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div id="sidebar-wrapper">
            <ul className="sidebar-nav  style={{background: 'black'}} ">
                <li>
                    <Link to="/alerting">
                        Alerting
            </Link>
                </li>
                <li>
                    <Link to="/radio_communication_failure">
                        Radio Communication Failure
            </Link>
                </li><hr />

                <li>
                    <Link to="/filed_flight_plan">
                        Filed Flight Plan
            </Link>
                </li>
                <li>
                    <Link to="/modification">
                        Modification
            </Link>
                </li>
                <li>
                    <Link to="/cancellation">
                        Cancellation
            </Link>
                </li>
                <li>
                    <Link to="/delay">
                        Delay
            </Link>
                </li>
                <li>
                    <Link to="/departure">
                        Departure
            </Link>
                </li>
                <li>
                    <Link to="/arrival">
                        Arrival
            </Link>
                </li><hr />

                <li>
                    <Link to="/current_flight_plan">
                        Current Flight Plan
            </Link>
                </li>
                <li>
                    <Link to="/estimate">
                        Estimate
            </Link>
                </li>
                <li>
                    <Link to="/coordination">
                        Coordination
            </Link>
                </li>
                <li>
                    <Link to="/acceptance">
                        Acceptance
            </Link>
                </li>
                <li>
                    <Link to="/logical_acknowledgement">
                        Logical Acknowledgement
            </Link><hr />
                </li>

                <li>
                    <Link to="/request_flight_plan">
                        Request Flight Plan
            </Link>
                </li>
                <li>
                    <Link to="/request_supplementary_flight_plan">Request Supplementary Flight Plan</Link>
                </li>
                <li>
                    <Link to="/supplementary_flight_plan">Supplementary Flight Plan</Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;