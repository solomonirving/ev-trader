import React, { Component } from 'react'

export default class AllCategories extends Component {
    render() {
        return (
            <div>
                <button type="button" className="btn btn-block btn-light mr-2 mb-1 mt-2 nav-link" id="latest" onClick={this.props.getAllCategories}>Latest</button>
            </div>
        )
    }
}
