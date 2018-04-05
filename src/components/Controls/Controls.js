import React, { Component } from 'react'

class Controls extends Component {

   

    render() {

        var { spend, desc, txtName } = this.props.contribute
        return (
            <div>
                <legend>AdvdDG</legend>

                <div className="btn-group">
                    <h3>
                        <span className="label label-info">Tên </span> <strong>{txtName}</strong>
                    </h3>



                </div>




                <div className="radio">
                    <h3>
                        <span className="label label-danger">Label</span>
                    </h3>
                  
                    {this.props.showMember}
                </div>

                <div className="form-group">
                    <label >Money Contribute</label>
                    <input type="number" className="form-control" name='spend' value={spend} onChange={this.props.onChange} />
                </div>
                <span className="label label-danger"> {spend}.000 VND </span>

                <div className="form-group">
                    <label >Ghi chu</label>
                    <input type="text" className="form-control" name='desc' value={desc} onChange={this.props.onChange} />
                </div>


                <button type="submit" className="btn btn-primary">Submit</button>

                <button type="reset" className="btn btn-danger">Clear</button>
            </div>
        )
    }
}

export default Controls;