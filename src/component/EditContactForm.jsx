import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateContactAction } from '../actions/contactActions';

class EditContactForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            contact_name: this.props.contacts.contactname,
            number: this.props.contacts.number,
            location: this.props.contacts.location,
        }
    }

    handleChange = (event) => {
        this.setState ({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
     this.props.editContact(this.props.contacts.id, this.state); 
     this.props.closeModal()
     
    }
    render() {
        return (
            <div className='forms'>

                <form>
                    <div>
                        <lable className='text'>Contact Name</lable>
                        <br></br><br></br>
                        <input type='text' name='contactname' value={this.state.contactname} onChange={this.handleChange} ></input>
                    </div><br></br><br></br>

                    <div>
                        <lable className='text'>Contact Number</lable><br></br><br></br>
                        <input type='number' name='number' value={this.state.number} onChange={this.handleChange} ></input>
                    </div><br></br><br></br>

                    <div>
                        <lable className='text'>Location</lable><br></br><br></br>
                        <input type='text' name='location' value={this.state.location} onChange={this.handleChange} ></input>
                    </div><br></br><br></br>

                    <div>
                        <button type='button' onClick= {this.handleSubmit}>Add Contact</button>
                    </div>
                </form>
                
            </div>
        )
    }
}

const mapDispatchToProps = {
    editContact : updateContactAction
};

export default connect (null, mapDispatchToProps) (EditContactForm);