import React, { Component } from 'react'
import { Modal, Button, Form, FormControl } from 'react-bootstrap'

export default class Modals extends Component {

    state = {
      isOpen: false,
      fade: false
    }

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });
  
    render() {
      return (
        <>
            <Button className="p2" id="logInButton" type="button" size="sm rounded-pill" onClick={this.openModal}>Log In</Button>  
            
            <div className="modal-container">
              <Modal className="modal-dialog-centered" id="modal" show={this.state.isOpen} onHide={this.closeModal}>
                <Modal.Header closeButton className="modal-header">
                </Modal.Header>
                <Modal.Body>
                <Modal.Title className="modal-title">Sign into account</Modal.Title>

                  <div className="ml-auto rounded ">
                      <Form inline id="modalForm">
                          <FormControl type="text" id="modalInput" placeholder="Username" className="mr-sm-2 border-1" />
                      </Form>
                  </div>
                  <div className="ml-auto rounded ">
                      <Form inline id="modalForm" >
                          <FormControl type="text" id="modalInput" placeholder="Password" className="mr-sm-2 border-1" />
                      </Form>
                  </div>
                </Modal.Body>
                <Modal.Footer className="modal-footer">
                  <button type="button" class="btn btn-primary" id="modalSignIn">Sign In </button>
                </Modal.Footer>
              </Modal>     
            </div>
          </>
     
      
      )
    }
}
