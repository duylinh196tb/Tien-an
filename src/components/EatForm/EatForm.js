import React, { Component } from 'react'

class EatForm extends Component {
    render() {
        return (
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">

                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">Table</h3>
                    </div>
                    <div className="panel-body">

                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>

                                        <th>STT</th>
                                        <th>Ten</th>
                                        <th>An</th>
                                        <th>Chi</th>
                                        <th>Result</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    {this.props.children}

                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default EatForm;
