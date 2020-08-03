import React, { useEffect }  from 'react';
import { DynamicForm } from '../DynamicForm';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { initilize } from '../../actions';


const Alerting = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(initilize());
  })
  return (
    <DynamicForm
      title="Alerting (ALR) Message"
      url={location.pathname}
      model={[
        { key: "message_type", label: "Message Type, Number, and Reference Data", placeholder: "" },
        { key: "description", label: "Description of Emergency", placeholder: "" },
        { key: "aircraft_id", label: "Aircraft ID and SSR Mode and Code", placeholder: "" },
        { key: "flight_rules", label: "Flight Rules and Type of Flight", placeholder: "" },
        { key: "aircraft_type", label: "Type of Aircraft and Wake Turbulence Category", placeholder: "" },
        { key: "equipment", label: "Equipment and Capabilities", placeholder: "" },
        { key: "departure", label: "Departure acrodrome and time", placeholder: "" },
        { key: "route", label: "Route(using more than one line if necessary)", placeholder: "" },
        { key: "destination", label: "Destination acrodrome and total estimated elapsed time, destination alternate acrodromes", placeholder: "" },
        { key: "other", label: "Other information(using more than one if necessary", placeholder: "" },
        { key: "supplementary", label: "Supplementary information (using more than one line if necessary)", placeholder: "" },
        { key: "alerting_search", label: "Alerting search and rescue information (using more than one line if necessary)", placeholder: "" }
      ]}
      firstRow={2} 
      secondRow={2} 
      thirdRow={2}
    />
  )
}

export default Alerting;