import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../config/colors';

import DateTimePicker from '@react-native-community/datetimepicker';
import {colors} from 'react-native-elements';

const Shedule = ({navigation}) => {
  // date picker start

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    setDate(currentDate);
    setShow(Platform.OS === 'ios' ? true : false);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  let monthNumber = date.getMonth();
  let monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let monthName = monthNames[monthNumber];

  // date picker end

  const [color, setcolor] = useState(styles.button1);
  const [scolor, ssetcolor] = useState(styles.button1);
  const [color1, setcolor1] = useState(styles.button2);
  const [scolor1, ssetcolor1] = useState(styles.button2);
  const [color2, setcolor2] = useState(styles.button5);
  const [txtcolor, settextcolor] = useState(styles.timeTxt);
  const [stxtcolor, ssettextcolor] = useState(styles.timeTxt);
  const [txtcolor1, settextcolor1] = useState(styles.timeTxt2);
  const [stxtcolor1, ssettextcolor1] = useState(styles.timeTxt2);
  const [txtcolor2, settextcolor2] = useState(styles.timeTxt2);
  const time1 = () => {
    // button1
    setcolor(styles.button1f);
    settextcolor(styles.timeTxtf);
    // button2
    ssetcolor(styles.button1);
    ssettextcolor(styles.timeTxt);
    // button3
    setcolor1(styles.button1);
    settextcolor1(styles.timeTxt);
    // button4
    setcolor2(styles.button1);
    settextcolor2(styles.timeTxt);
  };
  const time2 = () => {
    //button1
    setcolor(styles.button1);
    settextcolor(styles.timeTxt);
    //button2
    ssetcolor(styles.button1f);
    ssettextcolor(styles.timeTxtf);
    //button3
    setcolor1(styles.button1);
    settextcolor1(styles.timeTxt);
    //button4
    setcolor2(styles.button1);
    settextcolor2(styles.timeTxt);
  };
  const time3 = () => {
    //button1
    setcolor(styles.button1);
    settextcolor(styles.timeTxt);
    //button2
    ssetcolor(styles.button1);
    ssettextcolor(styles.timeTxt);
    //button3
    setcolor1(styles.button1f);
    settextcolor1(styles.timeTxtf);
    //button4
    setcolor2(styles.button1);
    settextcolor2(styles.timeTxt);
  };
  const time4 = () => {
    //button1
    setcolor(styles.button1);
    settextcolor(styles.timeTxt);
    //button2
    ssetcolor(styles.button1);
    ssettextcolor(styles.timeTxt);
    //button3
    setcolor1(styles.button1);
    settextcolor1(styles.timeTxt);
    //button4
    setcolor2(styles.button1f);
    settextcolor2(styles.timeTxtf);
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.backgroundcolor}}>
      {/* <ScrollView style={{height: 700}}> */}
      {/*header*/}

      <View style={styles.header}>
        <View style={{flexDirection: 'row', top: -20}}>
          <TouchableOpacity
            style={{paddingLeft: 20, top: 10}}
            onPress={() => navigation.goBack(null)}>
            <AntDesign name="left" size={20} color="white"></AntDesign>
          </TouchableOpacity>
          <Image
            source={require('../Assets/appbar.png')}
            style={{
              height: 45,
              width: 45,
              tintColor: Colors.backgroundcolor,
              left: 70,
              top: 4,
            }}
          />
          <Text
            style={{
              fontSize: 15,
              color: Colors.backgroundcolor,
              fontWeight: 'bold',
              justifyContent:'center',
              left: 75,
              top: 14,
            }}>
            HOME SERVE
          </Text>
        </View>
        <Text
          style={{
            color: Colors.backgroundcolor,
            fontSize: 16,
            fontWeight: 'bold',
            top: 30,
            justifyContent: 'center',
            alignSelf:'center',
            textAlign:'center',
            right: 70,
          }}>
          Schedule your service
        </Text>
      </View>
      <View style={styles.mainView}>
        {/*Service*/}

        <Text
          style={{
            color: Colors.secondaryText,
            fontWeight: 'bold',
            left: 15,
            marginTop: 15,
          }}>
          When do you need this service?
        </Text>
        <TouchableOpacity style={styles.textBox} onPress={showDatepicker}>
          <TouchableOpacity
            style={{top: 10, left: 20}}
            onPress={() => navigation.goBack()}>
            <AntDesign
              style={styles.iconItem}
              name="left"
              size={20}
              color={Colors.continercolor}
            />
          </TouchableOpacity>
          <Text style={{textAlign: 'center', top: 11, left: 55}}>
            {' '}
            {date.getDate()}{' '}
          </Text>
          <Text style={{textAlign: 'center', top: 11, left: 95}}>
            {' '}
            {monthName}{' '}
          </Text>
          <Text style={{textAlign: 'center', top: 11, left:125}}>
            {' '}
            {date.getFullYear()}
          </Text>
          <TouchableOpacity
            style={{top: 10, left: 150}}
            onPress={() => navigation.goBack()}>
            <AntDesign
              style={styles.iconItem}
              name="right"
              size={20}
              color={Colors.continercolor}
            />
          </TouchableOpacity>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              timeZoneOffsetInMinutes={0}
              value={date}
              mode={mode}
              is24Hour={true}
              display="calendar"
              onChange={onChange}
            />
          )}
        </TouchableOpacity>

        {/*Time*/}

        <Text
          style={{
            color: Colors.secondaryText,
            fontWeight: 'bold',
            left: 15,
            marginTop: 15,
          }}>
          Choose Time
        </Text>
        <View style={styles.innerView}>
          <TouchableOpacity
            style={color}
            onPress={() => {
              time1();
            }}>
            <Text style={txtcolor}>10am-11am</Text>
          </TouchableOpacity>
          <View style={{width: 15}} />
          <TouchableOpacity
            style={scolor}
            onPress={() => {
              time2();
            }}>
            <Text style={stxtcolor}>12pm-1pm</Text>
          </TouchableOpacity>
          <View style={{width: 15}} />
          <TouchableOpacity
            style={color1}
            onPress={() => {
              time3();
            }}>
            <Text style={txtcolor1}>2pm-3pm</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 20,width:20,}} />
        <TouchableOpacity
          style={color2}
          onPress={() => {
            time4();
          }}>
          <Text style={txtcolor2}>4pm-5pm</Text>
        </TouchableOpacity>
      </View>
      <View style={{top: 40, left: '4%', right: '4%'}}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(95, 95, 130, 1)',
            width: '92%',
            justifyContent: 'flex-end',
            position: 'absolute',
            // bottom: 40,
            borderRadius: 15,

            height: 80,
          }}>
          <View style={{flexDirection: 'row', left: 20, bottom: 7}}>
            <Text
              style={{
                color: Colors.backgroundcolor,
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              ₹1,899
            </Text>
            <Text
              style={{
                color: Colors.backgroundcolor,
                fontSize: 14,
                left: 30,
              }}>
              1 item
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.backgroundcolor,
              width: 88,
              height: 25,
              borderRadius: 8,
              bottom: 18,
              alignSelf: 'flex-end',
              right: 20,
            }}
            onPress={() => {
              navigation.navigate('Servicesummary');
            }}>
            <Text
              style={{
                color: Colors.secondaryText,
                fontWeight: 'bold',
                textAlign: 'center',
                top: 2,
              }}>
              Continue
            </Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', left: 20, bottom: 20}}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: Colors.backgroundcolor,
                borderRightColor: Colors.backgroundcolor,
                borderRightWidth: 0.54,
                paddingRight: 10,
              }}>
              AC DServicing
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: Colors.backgroundcolor,
                paddingLeft: 10,
              }}>
              Window
            </Text>
          </View>
        </View>
      </View>
      {/* </ScrollView> */}
      {/* {show && (
        <DateTimePicker 
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display="calendar"
          onChange={onChange}
        />
      )} */}
    </View>
  );
};
export default Shedule;
const styles = StyleSheet.create({
  button1: {
    backgroundColor: Colors.backgroundcolor,
    width: '25%',
    height: 30,
    borderWidth: 1,
    borderColor: Colors.primarycolor,
    borderRadius: 6,
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 10,
    left: 10,
  },
  button5: {
    backgroundColor: Colors.backgroundcolor,
    width: '25%',
    height: 30,
    borderWidth: 1,
    borderColor: Colors.primarycolor,
    borderRadius: 6,
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 10,
    left: 10,
  },
  button1f: {
    backgroundColor: Colors.primarycolor,
    width: '25%',
    height: 30,
    borderWidth: 1,
    borderColor: Colors.primarycolor,
    borderRadius: 6,
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 10,
    left: 10,
  },
  timeTxt: {
    color: Colors.primarycolor,
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  timeTxtf: {
    color: Colors.backgroundcolor,
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  button2: {
    backgroundColor: Colors.backgroundcolor,
    width: '25%',
    height: 30,
    borderWidth: 1,
    borderColor: Colors.primarycolor,
    borderRadius: 6,
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 10,
    left: 10,
  },
  button2f: {
    backgroundColor: Colors.primarycolor,
    width: '25%',
    height: 30,
    borderWidth: 1,
    borderColor: Colors.primarycolor,
    borderRadius: 6,
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 10,
    left: 20,
  },
  timeTxt2: {
    color: Colors.primarycolor,
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  timeTxt2f: {
    color: Colors.backgroundcolor,
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  header: {
    width: '100%',
    height: 110,
    flexDirection: 'row',
    paddingTop: 1,
    alignItems: 'center',
    //padding:2,
    // paddingLeft:2,
    elevation: 0,
    // borderBottomColor:'grey',
    backgroundColor: Colors.primarycolor,
    // justifyContent:'center'
    borderBottomRightRadius: 15,
    borderBottomStartRadius: 15,
  },
  text: {
    fontSize: 15,
    fontWeight: '900',
    // textAlign:'center',
    //alignItems:'center',
    fontWeight: 'bold',
    color: Colors.text,
    paddingLeft: 10,
    paddingTop: 17,
  },
  mainView: {
    flexDirection: 'column',
    height: 400,
    left: 10,
  },
  textBox: {
    marginTop: 5,
    width: 300,
    height: 40,
    left: 10,
    borderRadius: 7,
    backgroundColor: Colors.continercolor,
    flexDirection: 'row',
  },
  innerView: {
    flexDirection: 'row',
    left: 3,
  },
  button2: {
    backgroundColor: Colors.backgroundcolor,
    width: '25%',
    height: 30,
    borderRadius: 7,
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 10,
    left: 20,
    elevation: 1,
    borderColor: Colors.secondaryText,
    borderWidth: 1,
  },
  button3: {
    backgroundColor: Colors.backgroundcolor,
    width: '25%',
    height: 30,
    borderRadius: 7,
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 10,
    left: 30,
    elevation: 1,
    borderColor: Colors.secondaryText,
    borderWidth: 1,
  },
  button4: {
    backgroundColor: Colors.backgroundcolor,
    width: '25%',
    height: 30,
    borderRadius: 7,
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 20,
    left: 20,
    elevation: 1,
    borderColor: Colors.secondaryText,
    borderWidth: 1,
  },
});
