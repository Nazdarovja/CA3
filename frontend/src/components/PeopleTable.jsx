import React, { Component } from 'react'
import {
    NavLink
} from 'react-router-dom'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class PeopleTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataFromServer: {
                results: []
            }, error: undefined
        };
        this.head = this.head.bind(this);
        this.body = this.body.bind(this);
    }

    componentDidMount() {
        this.props.facade.fetchData()
            .then(res => this.setState({ dataFromServer: res, error : undefined }))
            .catch(err => this.setState({error: err.message}))
    }

    error = ()=>  {
        if(this.state.error === undefined){
        return(
            null
        )
    } else {
        return (
            <p className="alert alert-warning">{this.state.error}</p>
        )
    }
    }

    head() {
        return (
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Height</td>
                    <td>Mass</td>
                    <td>Hair color</td>
                    <td>Skin color</td>
                </tr>
            </thead>
        )
    }

    body() {
        const { results } = this.state.dataFromServer;
        const inner = results.map((rowData, index) => {
            return (
                <tr key={index}>
                    <td>{rowData.name}</td>
                    <td>{rowData.height}</td>
                    <td>{rowData.mass}</td>
                    <td>{rowData.hair_color}</td>
                    <td>{rowData.skin_color}</td>
                </tr>
            )
        })

        return (
            <tbody>
                {inner}
            </tbody>
        )
    }

    render() {
        return (
            <div>
                <table className="table table-striped">
                    {this.head()}
                    {this.body()}
                </table>
                {this.error()}
                <NavLink activeClassName="active" to="/">
                    <button className="btn btn-default">Back</button>
                </NavLink>
            </div>
        )
    }
}

export default PeopleTable;
