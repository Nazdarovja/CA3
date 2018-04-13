import React, { Component } from 'react'
import {
    NavLink
} from 'react-router-dom'

import "../style/App.css";

class PeopleTable extends Component {
    
    constructor(props){
        super(props);
        this.state = {dataFromServer: {
            results: []
          }, error: ""};
        this.head = this.head.bind(this);
        this.body = this.body.bind(this);
    }

    componentDidMount(){
        this.props.facade.fetchData()
        .then(res=> this.setState({dataFromServer: res}))
        .catch(err => console.log(err))
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

    body(){
        const {results} = this.state.dataFromServer;
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

    render(){
        return(
            <div>
                <table>
                    {this.head()}
                    {this.body()}
                </table>
                <NavLink activeClassName="active" to="/">
                    <button >Back</button>
                </NavLink>
                <p className="App-error">{this.state.error}</p>
            </div>
        )
    }
}

export default PeopleTable;
