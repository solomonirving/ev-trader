import React, { Component } from 'react'
import { Modal, Form, FormControl } from 'react-bootstrap'

export default class Modals extends Component {
  constructor(props) {
    super(props)
    this.state = {
        isOpen: false,
        fade: false,
        companyLogo:[],
        heading: [],
    }
}

  async componentDidMount() {
      const API_KEY = process.env.REACT_APP_APIKEY
      const DELIVERY_TOKEN = process.env.REACT_APP_DELIVERY_TOKEN
      var myHeaders = new Headers();
          myHeaders.append("api_key", API_KEY);
          myHeaders.append("access_token", DELIVERY_TOKEN);

      var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
      };

      //Header
      const url = "https://cdn.contentstack.io/v3/content_types/header/entries/blt2063159d6e6c183a?environment=development";
      const response = await fetch(url, requestOptions)
      const data = await response.json()
          this.setState({
                          companyLogo: data.entry.company_logo.url,
                          heading: data.entry.navigation_menu[0].title,                          
                      });
          // console.log(data.entry.navigation_menu[0].title)


  }

    //OPEN/CLOSE FUNCTION
    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });
  
    render() {
        return (
        <>
            {/* <p className="p2" id="logInButton" type="button" size="sm rounded-pill" onClick={this.openModal}>Log In</Button>  */}
            {/* <p className="nav-bar-text mr-auto" id="logInButton" onClick={this.openModal}>{this.state.heading}</p> */}
            <button type="button" class="btn btn-block btn-light nav-link-2"id="logInButton" onClick={this.openModal}>{this.state.heading}</button>

            
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
                  <button type="button" className="btn btn-primary" id="modalSignIn">Sign In </button>
                </Modal.Footer>
              </Modal>     
            </div>
          </>
     
      
      )
    }
}
