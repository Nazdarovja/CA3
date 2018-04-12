import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';


class PeopleTable extends Component {

    constructor(props) {
        super(props);
        this.headers = ["Name", "Height", "Mass", "Hair color", "Skin"];

        this.state = {
            dataFromServer: {
                results: []
            }
        };

    }

    fetchStuffs = async () => {
        const res =  await this.props.facade.fetchData()
        this.setState({dataFromServer : res});
            
        
    }

    head = () => {
        return (
            <Row data={this.headers} />
        )
    }

    body = () => {
        const { results } = this.state.dataFromServer;
        const inner = results.map((rowData, index) => {
            return (
                [rowData.name,
                rowData.height,
                rowData.mass,
                rowData.hair_color,
                rowData.skin_color]
            )
        })
        return (
            <Rows data={inner} />
        )
    }

    render() {
        return (
            <View>
                <Table>
                    {this.head()}
                    {this.body()}
                </Table>
                <Button onPress={() => this.props.logout()} title="Logout" />
                <Button onPress={() => this.fetchStuffs()} title="Please work" />
            </View>
        )
    }
}

export default PeopleTable;