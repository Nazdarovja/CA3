import React, { Component } from 'react'
import {
    NavLink
} from 'react-router-dom'


class PeopleTable extends Component {
    
    constructor(props){
        super(props);
        this.state = {dataFromServer: {
            results: []
          }};
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
            </div>
        )
    }
}

export default PeopleTable;


//   body = (() => {
//         const {tableData} = this.props;
//         console.log(tableData)
//         const inner = tableData.map(rowData => {
//             const row = this.state.indexes.map((num,index)=> {
//                 return <td>{rowData[num]}</td>
//             })
//             return (
//                 <tr>{row}</tr>
//             )
//         })

//         return (
//             <tbody>
//                 {inner}
//             </tbody>
//         )
//     })();




 // head = (() => {
    //     const dataKeys = Object.keys(this.props.tableData);
        

    //     const inner = dataKeys.filter((key,index)=> {
    //         return (this.state.indexes.find(index))
    //     })
    //     .map((dkey, index) => <td key={index}>{dkey}</td>)

    //     return (
    //         <thead>
    //             <tr>
    //                 {inner}
    //             </tr>
    //         </thead>
    //     )
    // })();

    // head() {
    //     console.log(this.props.tableData.results)
    //     const dataKeys = Object.keys(this.props.tableData.results);
        
    //     const inner = dataKeys.filter((key,index)=> {
    //         return (this.state.indexes.find((i) => i === index))
    //     })
    //     .map((dkey, index) => <td key={index}>{dkey}</td>)

    //     return (
    //         <thead>
    //             <tr key={'header'}>
    //                 {inner}
    //             </tr>
    //         </thead>
    //     )
    // }

    // body(){
    //     const {tableData} = this.props;
    //     const inner = tableData.results.map(rowData => {
    //         const row = this.state.indexes.map((num,index)=> {
    //             return <td>{rowData[num]}</td>
    //         })
    //         return (
    //             <tr key={rowData.name}>{row}</tr>
    //         )
    //     })

    //     return (
    //         <tbody>
    //             {inner}
    //         </tbody>
    //     )
    // }