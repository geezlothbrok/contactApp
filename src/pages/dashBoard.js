import React from 'react';
import { Component } from 'react';
import AddContactForm from '../component/AddContactForm';
import ContactToMap from '../component/ContactToMap';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';



class dashBoard extends Component {
  constructor(props){
    super(props);
    this.state = {
      contacts : [],
    };
  }

  addNewContact = (contact) => {
    contact.id= 10000 + Math.random()*10000000;
    this.setState({
      contacts: [...this.state.contacts, contact]
    })
  }

  deleteContact = (id) => {
    let actualContacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({
      contacts : actualContacts
    })
  }
        
  editContact = (id, updatedContact) =>{
    console.log(id, updatedContact);
    this.setState({
      contacts: this.state.contacts.map(contact => contact.id === id ? updatedContact : contact)
    })
  }

  handleLogout = () => {
      this.props.logout()
  };

  render () {
  return (
    
    <div>
     <h1 className="heading">CONTACT MANAGER
     <i class="fas fa-address-book"></i></h1>

      <div className= 'col-md-4'>
        <h4>ADD CONTACT
        </h4>

        <button type='button' onClick={this.handleLogout}>Log Out</button>

        <AddContactForm  addContact ={this.addNewContact}/>
      </div>

      <div className='col-md-8'>
        <h4>CONTACTS LIST</h4>

        <ContactToMap contacts={this.state.contacts} deleteContact={this.deleteContact} editContact={this.editContact} />
      </div>
    </div>
  )
}
}

const mapDispatchToProps = { logout };

export default connect(null, mapDispatchToProps)(dashBoard);