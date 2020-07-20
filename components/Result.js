import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Result extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.resultLayout}>
                <View style={styles.result}>
                    <Image style={styles.resultImage} source={{uri: this.props.resultPlayer}} />
                    <Text style={styles.resultText}>{this.props.resultTextPlayer}</Text>
                </View>
                <View style={styles.result}>
                    <Image style={styles.resultImage} source={{uri: this.props.resultComputer}} />
                    <Text style={styles.resultText}>{this.props.resultTextComputer}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    resultLayout: {
        flex: 1.7,
        flexDirection: 'row',
    },
    result:{
        flex: 1,
        alignItems: 'center',
        position: "relative"
    },
    resultImage: {
        width: "100%",
        height: 450,
    },
    resultText: {
        fontSize: 24,
        fontWeight: '700',
        color: '#333',
        position: "absolute",
        top: 180
    }
})