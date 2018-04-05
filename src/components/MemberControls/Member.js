import React, { Component } from 'react';

class Member extends Component {


    render() {
        return (
            <label>
                <input  
                name="mem" 
                type="checkbox" 
                value={this.props.id} 
                onChange={this.props.onHandleClickChkb} 
                /> {this.props.name}
            </label>
        );
    }
}

export default Member;