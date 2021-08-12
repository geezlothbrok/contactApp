import React, { Component } from 'react';
import ContactItems from './ContactItems';
import { connect} from 'react-redux';
import { getAllContactAction } from '../actions/contactActions';

class ContactToMap extends Component {
    constructor(props) {
        super(props)
    };

    componentDidMount(){
        this.props.getAllContactAction()
    };

    render() {
        return (
            <div>
                {this.props.contacts.map((contact) => {
                    return <ContactItems contact={contact} deleteContact={this.props.deleteContact} editContact={this.props.editContact}/>;
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
    contactsData : state.contactsState.contacts
    }
}

const mapDispatchToProps = {
    getAllContactAction
}
export default connect (mapStateToProps, mapDispatchToProps) (ContactToMap);