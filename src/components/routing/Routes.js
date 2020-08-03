import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';


import { FiledFlightPlan, Alerting, Acceptance, RadioCommunicationFailure, 
  RequestFlightPlan, Arrival, Cancellation, Coordination, CurrentFlightPlan,
  Delay, Departure, Estimate, LogicalAcknowledgement, Modification,
  SupplementaryFlightPlan, RequestSupplementaryFlight } from '../pages';


const Routes = props => {
  return (
    <section className="container">
      <Alert />
      
        <Switch>
           <Route exact path="/register" component={Register} />
           <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/alerting" comp={Alerting}></PrivateRoute>
            <PrivateRoute path="/radio_communication_failure" comp={RadioCommunicationFailure} ></PrivateRoute>
            <PrivateRoute path="/filed_flight_plan" comp={FiledFlightPlan}></PrivateRoute>
            <PrivateRoute path="/modification" comp={Modification}></PrivateRoute>
            <PrivateRoute path="/cancellation" comp={Cancellation}></PrivateRoute>
            
            <PrivateRoute path="/delay" component={Delay}></PrivateRoute>
            <PrivateRoute path="/departure" comp={Departure}></PrivateRoute>
            <PrivateRoute path="/arrival" comp={Arrival}></PrivateRoute>
            <PrivateRoute path="/current_flight_plan" comp={CurrentFlightPlan}></PrivateRoute>
            <PrivateRoute path="/estimate" comp={Estimate}></PrivateRoute>
            <PrivateRoute path="/coordination" comp={Coordination}></PrivateRoute>
            <PrivateRoute path="/acceptance" comp={Acceptance}></PrivateRoute>
            <PrivateRoute path="/logical_acknowledgement" comp={LogicalAcknowledgement}></PrivateRoute>
            <PrivateRoute path="/request_flight_plan" comp={RequestFlightPlan}></PrivateRoute>
            <PrivateRoute path="/request_supplementary_flight_plan" comp={RequestSupplementaryFlight}></PrivateRoute>
            <PrivateRoute path="/supplementary_flight_plan" comp={SupplementaryFlightPlan}></PrivateRoute>






        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
