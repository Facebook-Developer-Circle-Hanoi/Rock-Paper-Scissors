import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class Info extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.infoLayout}>
                <View style={styles.infoPlayer}>
                    <Text style={styles.textInfo}>{this.props.namePlayer}</Text>
                    <Text style={styles.winInfo}> {this.props.pointPlayer}</Text>
                </View>
                <View style={styles.infoComputer}>
                    <Text style={styles.winInfo}>{this.props.pointComputer} </Text>
                    <Text style={styles.textInfo}>{this.props.nameComputer}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    infoLayout: {
        flex: 0.5,
        flexDirection: 'row',
    },
    infoPlayer: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    infoComputer: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    textInfo: {
        fontSize: 24,
        fontWeight: '700'
    },
    winInfo: {
        fontSize: 24,
        fontWeight: '700',
        color: '#a00'
    }
})