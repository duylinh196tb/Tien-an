import React, { Component } from 'react';
import EatForm from '../components/EatForm/EatForm';
import EatList from '../components/EatList/EatList';
import { connect } from 'react-redux'
import { actGetInfo } from '../actions';


class EatFormContainer extends Component {



    showList = eat => {
        var result = null;



        if (eat.length > 0) {
            result = eat.map((e, index) => {

                //total Spend
                function spend(){
                    var tsd = 0 ;
                    e.details.map((s, index) => {
                        tsd += s.spend
                        return tsd
                    })
                    return tsd
                }

                //totalSpent

                return <EatList
                    key={index}
                    stt={index + 1}
                    name={e.name}
                    id = {e.id}
                    spend={spend()}
                    totalSpent={e.totalSpent} 
                    onHandleClick={this.onHandleClick}/>

            })
        }
        return result;
    }


    onHandleClick = (id, name)=> {
        this.props.onGetInfo({
            id: id,
            name:name
        })
    }

    render() {
        return (
            <div>
                <EatForm>
                    {this.showList(this.props.eat)}
                </EatForm>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        eat: state.eat
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetInfo : (info) => {
            dispatch(actGetInfo(info))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EatFormContainer)
