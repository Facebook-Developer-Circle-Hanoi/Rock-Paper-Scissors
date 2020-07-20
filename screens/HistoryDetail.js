import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import HistoryButton from '../components/HistoryButton';

export default function LogGame(props) {
    // list game
    const data = props.route.params.data;

    return (
        <View style={styles.container}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={data}
              renderItem={({item})=> {
                console.log(item);
                return(
                  <HistoryButton onPress={() => {gameDetail(item.id)}} value={item.id}></HistoryButton>
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