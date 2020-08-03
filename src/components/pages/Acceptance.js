import React, {useEffect} from 'react';
import { DynamicForm } from '../DynamicForm';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { initilize } from '../../actions';

const Acceptance = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(initilize());
  })
 
  return (
    <DynamicForm
      title="Acceptance (ACP) message"
      url={location.pathname}
      firstRow={3} 
      secondRow={1}
      model={[
        { key: "message_type", label: "Message Type, Number, and Reference Date",type: "textarea", placeholer:"textarea"},
        { key: "aircraft_id", label: "Aircraft Identification and SSR Mode", placeholder: "" },
        { key: "departure", label: "Departure acrodrome and time", placeholder: "" },
        { key: "destination", label: "Destination acrodrome and total estimated elapsed time, destination alternate acrodromes", placeholder: "" }
      ]}
    />
  )
}

export default Acceptance;