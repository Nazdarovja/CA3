import React, { Component } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
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

    componentWillReceiveProps(props) {
        this.setState({ dataFromServer: props.data });
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
                    <Row data={this.headers} />
                    {this.body()}
                </Table>
            </View>
        )
    }
}

export default PeopleTable;