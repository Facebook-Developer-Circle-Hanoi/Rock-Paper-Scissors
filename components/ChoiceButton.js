import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <TouchableOpacity onPress={this.props.action}>
                <Image style={styles.optionButton} source={{uri: this.props.image}} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    optionButton: {
        width: 60,
        height: 60,
        borderColor: '#392211',
        borderWidth: 1,
        borderRadius: 50,
        marginHorizontal: 10
    }
})