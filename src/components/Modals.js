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
            <Button className="p2" type="button" size="sm rounded-pill" onClick={this.openModal}>Log In</Button>  
            <div className="modal-container">

            <Modal className="modal-dialog-centered" show={this.state.isOpen} onHide={this.closeModal}>
              <Modal.Header closeButton className="modal-header">
                <Modal.Title className="modal-title">Sign into account</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="ml-auto rounded ">
                    <Form inline>
                        <FormControl type="text" placeholder="Username" className="mr-sm-2 border-1" />
                    </Form>
                </div>
                <div className="ml-auto rounded ">
                    <Form inline>
                        <FormControl type="text" placeholder="Password" className="mr-sm-2 border-1" />
                    </Form>
                </div>
              </Modal.Body>
              <Modal.Footer className="modal-footer">
                <button type="button" class="btn btn-primary">Sign In </button>
              </Modal.Footer>
            </Modal>
            
            </div>
          </>
     
      
      )
    }
}
