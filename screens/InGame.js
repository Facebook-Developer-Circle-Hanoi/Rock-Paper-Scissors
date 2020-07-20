import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
// components
import Info from '../components/Info';
import Result from '../components/Result';
import Status from '../components/Status';
import Button from '../components/ChoiceButton';
// data
import ChoiceData from '../data/Rps';

export default function InGame(props) {
  const [gameId, setGameId] = useState(props.route.params.game);
  const [totalTurns, setTotalTurns] = useState(0);
  // info
  const [namePlayer, setNamePlayer] = useState("Player");
  const [nameComputer, setNameComputer] = useState('Bé Địu');

  // result
  const [resultPlayer, setResultPlayer] = useState(ChoiceData[0].result);
  const [resultComputer, setResultComputer] = useState(ChoiceData[1].result);

  const [status, setStatus] = useState(3);

  // choice
  const [nameChoicePlayer, setNameChoicePlayer] = useState(ChoiceData[0].name);
  const [nameChoiceComputer, setNameChoiceComputer] = useState(ChoiceData[1].name);

  // point
  const [pointPlayer, setPointPlayer] = useState('0');
  const [pointComputer, setPointComputer] = useState('0');

  // insert turn to database
  const addTurn = async (nameChoicePlayer, nameChoiceComputer) => {
    fetch(`https://getinsvn.com/api/turn/add.php`, {
      method: "POST",
      mode: "cors",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        game_id: gameId,
        choice_player: nameChoicePlayer,
        choice_computer: nameChoiceComputer
      })
    })
    .then(async response => {
        const data = await response.json();
    })
    .catch(err => {
        console.log(err);
    })
  }

  // result Choice Player
  const resultChoicePlayer = (option) => {
    if(option == ChoiceData[0].name) {
      setResultPlayer(ChoiceData[0].result);
      setNameChoicePlayer(ChoiceData[0].name);
    } else if(option == ChoiceData[1].name) {
      setResultPlayer(ChoiceData[1].result);
      setNameChoicePlayer(ChoiceData[1].name);
    } else {
      setResultPlayer(ChoiceData[2].result);
      setNameChoicePlayer(ChoiceData[2].name);
    }
  }

  // random Choice Computer Number
  const randomChoiceComputer = () => {
    return Math.floor(Math.random() * 3);
  }

  // result Choice Computer
  const resultChoiceComputer = (randomNumber) => {
    if(ChoiceData[randomNumber].name == ChoiceData[0].name) {
      setResultComputer(ChoiceData[0].result);
      setNameChoiceComputer(ChoiceData[0].name);
    } else if(ChoiceData[randomNumber].name == ChoiceData[1].name) {
      setResultComputer(ChoiceData[1].result);
      setNameChoiceComputer(ChoiceData[1].name);
    } else {
      setResultComputer(ChoiceData[2].result);
      setNameChoiceComputer(ChoiceData[2].name);
    }
  }

  // point Calculation && check status
  const pointCalculation = (option, randomNumber) => {
    var pointP = parseInt(pointPlayer);
    var pointC = parseInt(pointComputer);
    var statusNumber = 3;
    if (option != ChoiceData[randomNumber].name) {
      for (var i = 0; i < 3; i++) {
        if (option == ChoiceData[i].name) {
          var j = i < 2 ? i+1 : i;
          if ((ChoiceData[randomNumber].name == ChoiceData[j].name && i < 2) || (i > 1 && ChoiceData[randomNumber].name == ChoiceData[i].name)) {
            pointC++;
            var statusNumber = 1;
            break;
          } else {
            pointP++;
            var statusNumber = 0;
            break;
          }
        }
      }
    } else {
      var statusNumber = 2;
    }

    // update point
    setPointPlayer(pointP);
    setPointComputer(pointC);

    //update status
    setStatus(statusNumber);
  }

  const choice = (option) => {
    // get choice player
    resultChoicePlayer(option);

    // random choice computer
    var random = randomChoiceComputer();
    resultChoiceComputer(random);
  
    // point calculation
    pointCalculation(option, random);
    
    addTurn(option, ChoiceData[random].name);

    // calculation turn game (max: 10)
    var turns = parseInt(totalTurns);
    turns++;
    setTotalTurns(turns);
    if(turns == 10) {
      if(pointPlayer > pointComputer) {
        var statusResult = 'Win';
      } else if (pointPlayer < pointComputer) {
        var statusResult = 'Lose';
      } else {
        var statusResult = 'Draw';
      }
      Alert.alert(`You ${statusResult} - (${pointPlayer} - ${pointComputer})`);
      props.navigation.navigate('Home');
    }
  }

  return (
    <View style={styles.container}>

      {/* Result choice */}
      <Result
        resultPlayer={resultPlayer}
        resultComputer={resultComputer}
        resultTextPlayer={nameChoicePlayer}
        resultTextComputer={nameChoiceComputer}
      ></Result>
      <View style={{flex: 1,alignItems: 'center',
    justifyContent: 'center',position:'relative'}}>
        {/* Info player and computer */}
      <Info 
        namePlayer={namePlayer}
        nameComputer={nameComputer}
        pointPlayer={pointPlayer}
        pointComputer={pointComputer}
      ></Info>

      {/* The status is returned when choice */}
      <Status status={status}></Status>

      {/* choice button */}
      <View style={styles.optionLayout}>
        <Button
          action={()=>choice(ChoiceData[0].name)}
          image={ChoiceData[0].uri}
        ></Button>
        <Button
          action={()=>choice(ChoiceData[1].name)}
          image={ChoiceData[1].uri}
        ></Button>
        <Button
          action={()=>choice(ChoiceData[2].name)}
          image={ChoiceData[2].uri}
        ></Button>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionLayout: {
    flex: 1,
    height: 100,
    flexDirection: 'row',
    position: 'relative',
    top: -10
  },
});
