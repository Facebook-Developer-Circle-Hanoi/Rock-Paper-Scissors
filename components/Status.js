import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import StatusData from '../data/Status';

export default class Status extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.status}>
                <Image style={styles.statusImage} source={{uri: StatusData[this.props.status].uri}} />
                <Text style={[styles.statusContent, {color: StatusData[this.props.status].color}]}>{StatusData[this.props.status].name}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    status: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: -20
    },
        statusImage: {
        width: 150,
        height: 150
    },
    statusContent: {
        fontSize: 22,
        fontWeight: '700'
    }
})