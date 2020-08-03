import React, { useEffect } from 'react';
import { DynamicForm } from '../DynamicForm';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { initilize } from '../../actions';


const LogicalAcknowledgement = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(initilize());
  })
  return (
    <DynamicForm
      title="Logical acknowledgement (LAM) message"
      url={location.pathname}
      firstRow={1}
      model={[
        { key: "message_type", label: "Message Type, Number, and Reference Data", placeholder: "" },
      ]}
    />
  )
}

export default LogicalAcknowledgement;