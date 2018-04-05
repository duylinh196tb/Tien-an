import React, { Component } from 'react';

class EatList extends Component {

    onHandleClick = () => {
        this.props.onHandleClick(this.props.id, this.props.name)
        // console.log(this.props.id);
    }

    render() {
        var {spend, totalSpent, name, stt} = this.props
        console.log(this.props);
        return (
           
                <tr>
                    <td>{stt}</td>
                    <td>{name}</td>
                    <td>{totalSpent} k</td>
                    <td>{spend} k</td>
                    <td>{spend - totalSpent} k</td>
                    <td>
                    <button type="button" className="btn  btn-info mr-5" onClick = {this.onHandleClick}>Add</button>
                    <button type="button" className="btn  btn-success" onClick = {this.onHandleClick}>Details</button>
                    </td>
                </tr>
            
        );
    }
}

export default EatList;