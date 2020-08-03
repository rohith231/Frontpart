import React, { useEffect } from 'react';
import { DynamicForm } from '../DynamicForm';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { initilize } from '../../actions';

const RadioCommunicationFailure = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(initilize());
  })
  return (
    <DynamicForm
      title="Radio Communication Failure"
      url={location.pathname}
      firstRow={2}
      model={[
        { key: "message_type", label: "Message Type, Number, and Reference Date", placeholder: "" },
        { key: "aircraft_id", label: "Aircraft Identification and SSR Mode", placeholder: "" },
        { key: "radio", label: "Radio failure information (using more than one line if necessary)", placeholder: "" }
      ]}
      
    />
  )
}

export default RadioCommunicationFailure;