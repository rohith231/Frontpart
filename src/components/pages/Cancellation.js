import React, { useEffect } from 'react';
import { DynamicForm } from '../DynamicForm';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { initilize } from '../../actions';

const Cancellation = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(initilize());
  })

  return (
    <DynamicForm
      title="Cancellation"
      url={location.pathname}
      firstRow={3}
      secondRow={1}
      model={[
        { key: "message_type", label: "Message Type, Number, and Reference Data", placeholder: "" },
        { key: "aircraft_id", label: "Aircraft identification and SSR mode", placeholder: "" },
        { key: "departure", label: "Departure acrodrome and time", placeholder: "" },
        { key: "destination", label: "Destination acrodrome and total estimated elapsed time, destination alternate acrodromes", placeholder: "" },
        { key: "other", label: "Other information(using more than one if necessary", placeholder: "" }
      ]}
    />
  )
}

export default Cancellation;