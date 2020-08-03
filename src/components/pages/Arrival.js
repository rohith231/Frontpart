import React, { useEffect } from 'react';
import { DynamicForm } from '../DynamicForm';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { initilize } from '../../actions';

const Arrival = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(initilize());
  })

  return (
    <DynamicForm
      title="Arrival (ARR) message"
      url={location.pathname}
      firstRow={3}
      model={[
        { key: "message_type", label: "Message Type, Number, and Reference Data", placeholder: "" },
        { key: "aircraft_id", label: "Aircraft identification and SSR mode", placeholder: "" },
        { key: "meparture", label: "Departure acrodrome and time", placeholder: "" },
        { key: "arrival", label: "Arrival acrodrome and time", placeholder: "" }
      ]}
    />
  )
}

export default Arrival;