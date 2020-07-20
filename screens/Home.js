import React from 'react';
import {View, StyleSheet} from 'react-native';
import HomeButton from '../components/HomeButton';

export default function Home({ navigation }) {
    addGame = async () => {
        fetch(`https://getinsvn.com/api/games/add.php`)
        .then(async response => {
            const data = await response.json();
            navigation.navigate('InGame', {game: data.id});
        })
        .catch(err => {
            console.log(err);
        })
    }

    readGame = async () => {
        fetch(`https://getinsvn.com/api/games/read.php`)
        .then(async response => {
            const data = await response.json();
            navigation.navigate('History', {list: data});
        })
        .catch(err => {
            console.log(err);
        })
    }

    _onPressPlay = () => {
        addGame();
    }

    _onPressHistory = () => {
        readGame();
    }

    return (
        <View style={styles.container}>
            <HomeButton onPress={_onPressPlay} value="Play"></HomeButton>
            <HomeButton onPress={_onPressHistory} value="History"></HomeButton>
            <HomeButton value="Quit"></HomeButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
})