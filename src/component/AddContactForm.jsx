import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContactAction} from '../actions/contactActions';

class AddContactForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            contactname: "",
            number: "",
            location: "",
        }
    }

    handleChange = (event) => {
        this.setState ({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
     this.props.addContact(this.state); 
     this.setState({
         contactname: "",
         number: "",
         location: ""
     })
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

export default connect (null, { addContactAction }) (AddContactForm);