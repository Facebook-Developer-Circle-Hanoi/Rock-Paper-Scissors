import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

export default class HomeButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <TouchableOpacity style={styles.game} onPress={this.props.onPress}>
                <Image style={styles.gameImage} source={{uri: this.props.image}} />
                <Text style={styles.gameText}>{`Game ${this.props.value} - ${this.props.status} - ${this.props.winRate}% win rate`}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    game: {
        flexDirection: "row",
        height: 50,
        backgroundColor: "#fff",
        borderBottomColor: "#eaeaea",
        borderBottomWidth: 1,
        alignItems: "center",
    },
    gameText: {
        color: "#333",
        fontSize: 18
    },
    gameImage: {
        width: 30,
        height: 30,
        marginHorizontal: 15
    }
})