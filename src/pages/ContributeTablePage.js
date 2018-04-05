import React, { Component } from 'react';
import ControlsContainer from '../containers/ControlsContainer';
import EatFormContainer from '../containers/EatFormContainer';

class ContributeTablePage extends Component {
    render() {
        return (
            <div>
            <div className="text-center">
            <h1>Table</h1>
          </div>
          <hr />
          <ControlsContainer />
          <EatFormContainer /> 
            </div>
        );
    }
}

export default ContributeTablePage;