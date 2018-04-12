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

    async componentDidMount() {
        await this.props.facade.fetchData()
            .then(res => this.setState({ dataFromServer: res }))
            .catch(err => console.log("THIS IS THE ERROR" + JSON.stringify(err)))
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
            </View>
        )
    }
}

export default PeopleTable;