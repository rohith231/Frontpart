import React, { useEffect } from 'react';
import { DynamicForm } from '../DynamicForm';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { initilize } from '../../actions';

const Estimate = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(initilize());
  })
  return (
    <DynamicForm
      title="Estimate (EST) message"
      url={location.pathname}
      firstRow={3}
      model={[
        { key: "message_type", label: "Message Type, Number, and Reference Data", placeholder: "" },
        { key: "aircraft_id", label: "Aircraft identification and SSR mode", placeholder: "" },
        { key: "departure", label: "Departure acrodrome and time", placeholder: "" },
        { key: "destination", label: "Destination acrodrome and total estimated elapsed time, destination alternate acrodromes", placeholder: "" },
        { key: "estimate_data", label: "Estimate Data", placeholder: "" },
      ]}
    />
  )
}

export default Estimate;