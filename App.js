import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  ActivityIndicator,
  Modal,
  TextInput,
  RefreshControl,
} from 'react-native';
//
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
const bootstrapStyleSheet = new BootstrapStyleSheet();
const {s, c} = bootstrapStyleSheet;
//
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';

//

export default function App() {
  const [h, setH] = useState(0);
  const [m, setM] = useState(0);
  const [s, setS] = useState(0);
  const [btn, setBtn] = useState("START");
  const [isStarted, setIsStarted] = useState(false);
  
  const counter = 5;
  var c;
  ///////////////////////////////
  
    const counting =()=> {
      console.log(".........");
    if (s < counter-1){
      console.log(s);
    setS(s+1)
    }
    if (s == counter-1){
      setS(0)
      console.log("finished " ,s);
      if (m < counter -1){
        setM(m+1) 
      }
      if (m == counter-1 ){
        console.log(" minit finished " ,m);
        setM(0)
        setH(h+1)
      }
    }}
    // }, 1000)
  ////////////////////////////////
  const startCount =()=>{
    console.log("Start");
    setBtn("Running...")
    setIsStarted(true)
    // count();
  }

  const stopCount =()=>{
    console.log("stop");
    setIsStarted(false)
    clearInterval(c)
    setBtn("START")
  }

  const restartCount =()=>{
    console.log("reset");
    setIsStarted(false)
    clearInterval(c)
    setS(0)
    setM(0)
    setH(0)
    setBtn("START")
  }
 

  
  useEffect(() => {
    console.log("# use effect....", isStarted);
    // if(isStarted){
    //   c = setInterval(counting, 1000);
    // }
  });


  ///////////////////////////////
  return (
    <View
      style={[
        s.body,
        {justifyContent: 'space-between', flex: 1, flexDirection: 'column'},
      ]}>
      {/* <View style={[s.card, s.cardBody]}> */}
      <View style={[s.row, s.bgWarning]}>
        <View style={[s.col]}>
          <Text
            style={[
              {
                fontSize: 25,
                color: '#6af',
                fontWeight: 'bold',
                textAlign: 'center',
              },
            ]}>
            STOPWATCH
          </Text>
        </View>
      </View>
      <View style={[s.row]}>
        <View style={[s.col, s.mAuto]}>
          <Text
            style={[
              s.textCenter,
              s.btn,
              s.brnPrimary,
              {
                fontSize: 60,
                color: '#575757',
                fontWeight: 'bold',
                textAlign: 'center',
              },
            ]}>
            {h}:{m}:{s}
          </Text>
        </View>
      </View>
      {/* </View> */}
      {/*  */}
      <View>
          <Button color="#3a7" title={btn} disabled={isStarted} onPress={()=>{c = setInterval(counting, 1000)}} />
          <Button title="Pause"  onPress={()=>{stopCount()}} />
          <Button color="#a55" title="Reset"  onPress={()=>{restartCount()}} />

    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    margin: 5,
    marginBottom: 5,

    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.7,
    shadowRadius: 5.49,
  },
});
