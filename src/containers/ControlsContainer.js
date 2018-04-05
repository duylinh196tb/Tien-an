import React, { Component } from 'react';
import Controls from '../components/Controls/Controls';
import { connect } from 'react-redux'
import Member from '../components/MemberControls/Member';
import {  actFetchContributeRequest, actAddContribute  } from '../actions';

class ControlsContainer extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         id: '',
    //         txtName: '',
    //         spend: 0,
    //         mem: [],
    //         desc: ''
    //     };
    // }
    state = {
        id: '',
        txtName: '',
        spend: '',
        mem: [],
        desc: ''
    }

    // componentDidMount() {
    //     this.props.fetchAllContribute();
    // }

    componentWillReceiveProps(nextProps) {
        if (nextProps.info && nextProps.info.id) {
            this.setState({
                id: nextProps.info.id,
                txtName: nextProps.info.name,
            })
        } else this.setState({
            id: '',
            txtName: '',
            spend: 0,
            desc: ''
        })

        // console.log(nextProps);
    }



    showMember = eat => {
        var result = null;

        result = eat.map((e, index) => {

            return <Member
                key={index}
                name={e.name}
                onHandleClickChkb={this.onHandleClickChkb}
                onToggleClickChkb={this.onToggleClickChkb}
                contribute={this.state}
                id={e.id}
            />
        })
        return result;
    }

    onHandleSubmit = e => {
        e.preventDefault();
        // console.log(this.state);
        if (this.state.mem.length === 0) {
            alert('Nhập thành viên')
        } else if (this.state.spend <= 0) alert('Nhap so tien > 0')
        else if (confirm(`${this.state.txtName} Đóng góp ${this.state.spend}`)) { //eslint-disable-line
            this.props.onAddContribute({
                id: this.state.id,
                details: {
                    spend: this.state.spend,
                    mem: this.state.mem,
                    desc: this.state.desc,
                    spent: (this.state.spend / this.state.mem.length)

                }
            })
        }


        // console.log(this.state);

    }

    onHandleChange = e => {
        var target = e.target;
        var name = target.name;
        var value = target.value;

        if (name === 'spend') {
            value = parseInt(value, 0)
        }
        this.setState({
            [name]: value
        })
    }

    onHandleClickChkb = e => {
        var mem = this.state.mem;
        var value = parseInt(e.target.value, 10)
        this.setState({
            mem: e.target.checked ? mem.concat(value) : mem.filter(m => m !== value)
        })
    }



    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <form onSubmit={this.onHandleSubmit}>
                    <Controls
                        onChange={this.onHandleChange}
                        showMember={this.showMember(this.props.eat)}
                        contribute={this.state}
                    />
                </form>
            </div>
        );
    }
}



const mapStateToProps = state => {
    return {
        eat: state.eat,
        info: state.info
    }
}

const mapDispathToProps = (dispatch, props) => {
    return {
        onAddContribute: (contribute) => {
            dispatch(actAddContribute(contribute))
        },
        // fetchAllContribute: () => {
        //     dispatch(actFetchContributeRequest())
        // }
    }
}




export default connect(mapStateToProps, mapDispathToProps)(ControlsContainer)