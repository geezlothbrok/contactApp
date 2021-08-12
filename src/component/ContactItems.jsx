import React, { Component } from 'react';
import {Modal} from 'react-bootstrap'
import EditContactForm from './EditContactForm';
import { connect } from 'react-redux';
import { deleteContactAction } from '../actions/contactActions';

class ContactItems extends Component {
    constructor(props) {
        super(props);
        this.state= {
            show: false
        };
       
    }

    handleDelete = (event) => {
        event.preventDefault();
        console.log('Item was deleted successfully!');
        this.props.deleteContact(this.props.contact.id)

    }

    closeModal = () =>{
        this.setState(
           {show : false}
        )
    }
    showModal = () =>{
        this.setState(
            {show : true}
        )
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-3">
                        <h4 className="tittle">Name</h4>{" "+ this.props.contact.contactname}
                    </div>
                    <div className="col-md-3">
                    <h4 className="tittle" >Phone Number</h4>{" " + this.props.contact.number }
                    </div>
                    <div className="col-md-2">
                    <h4 className="tittle">Location</h4>{" " + this.props.contact.location}
                    </div>
                    <div className="col-md-4">
                        <button type="button" className="edit" onClick={this.showModal}>Edit</button>
                        <button type="button" className="delete" onClick={this.handleDelete}>Delete</button>
                    </div>
                </div>
                

                <Modal show={this.state.show} onHide={this.closeModal}>
                  <Modal.Header closeButton>
                      <Modal.Title>Edit Contact </Modal.Title>
                  </Modal.Header>

                  <Modal.Body >
                    <EditContactForm
                    contacts = {this.props.contact}
                    editContact = {this.props.editContact} 
                    closeModal = {this.closeModal}/>
                  </Modal.Body>
                </Modal>
            </div>
        )
    }
}

const mapDispatchToProps = {
    deleteContact : deleteContactAction
}

export default connect (null, mapDispatchToProps) ( ContactItems) ;