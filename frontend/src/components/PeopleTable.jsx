import React, { Component } from 'react'

class PeopleTable extends Component {
    
    constructor(props){
        super(props);
        this.state = {indexes: [0,1,2,3,4,5,6,7]};
    }

/*
    "name": "Luke Skywalker",
	"height": "172",
	"mass": "77",
	"hair_color": "blond",
	"skin_color": "fair",
	"eye_color": "blue",
	"birth_year": "19BBY",
	"gender": "male",
	"homeworld": "https://swapi.co/api/planets/1/",
*/

    head = (() => {
        const dataKeys = Object.keys(this.props.tableData);
        

        const inner = dataKeys.filter((key,index)=> {
            return (this.state.indexes.find(index))
        })
        .map((dkey, index) => <td key={index}>{dkey}</td>)

        return (
            <thead>
                <tr>
                    {inner}
                </tr>
            </thead>
        )
    })();

    body = (() => {
        const {tableData} = this.props;
        const inner = tableData.map(rowData => {
            const row = this.state.indexes.map((num,index)=> {
                return <td>{rowData[num]}</td>
            })
            return (
                <tr>{row}</tr>
            )
        })

        return (
            <tbody>
                {inner}
            </tbody>
        )
    })();

    render(){
        return(
            <table>
                {this.head}
                {this.body}
            </table>
        )
    }
}

export default GenericTable;