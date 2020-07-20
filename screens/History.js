import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import HistoryButton from '../components/HistoryButton';

export default function LogGame(props) {
    // list game
    const data = props.route.params.list;

    // game detail
    gameDetail = (gameId) => {
      console.log(gameId);
      fetch('https://getinsvn.com/api/turn/read.php?id='+gameId , {
        method: "POST",
        mode: "cors",
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(async response => {
          const data = await response.json();
      })
      .catch(err => {
          console.log(err);
      })
    }

    return (
        <View style={styles.container}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={data}
              renderItem={({item})=> {
                return(
                  <HistoryButton status={item.status} winRate={item.win_rate} image={item.image} onPress={() => {gameDetail(item.id)}} value={item.id}></HistoryButton>
                )
              }}
            >
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});