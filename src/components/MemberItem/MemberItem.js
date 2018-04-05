import React, { Component } from 'react';

class MemberItem extends Component {
    render() {
        var {name, nbp, stt} = this.props
        return (
            <tr>
                <td>{stt}</td>
                <td>{name}</td>
                <td>{nbp}</td>
                <td>

                    <button type="button" className="btn btn-info mr-5">Edit</button>
                    <button type="button" className="btn btn-danger">Delete</button>

                </td>
            </tr>
        );
    }
}

export default MemberItem;