import React, { Component } from 'react'


export default class AllCategories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            all: [],
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
        const url = "https://cdn.contentstack.io/v3/content_types/category/entries?environment=development";
        const response = await fetch(url, requestOptions)
        const data = await response.json()
            this.setState({all: data.entries})
            // console.log(data.entries)   
    }

    render() {
        // console.log(this.state.all[0].title)   

        return (
            <div>
                <button type="button" value="ev" className="btn btn-block btn-light mr-2 mb-1 mt-2 nav-link" id="latest" onClick={this.props.onselectCategory}>Latest</button> 
            </div>
        )
    }
}
