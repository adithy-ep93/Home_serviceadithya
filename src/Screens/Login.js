import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  StatusBar,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
//import {useNavigation} from '@react-navigation/native';
import Colors from '../config/colors';

const Login = ({navigation}) => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  // const navigation = useNavigation();

  const [mobno, setMobileno] = useState('');
  return (
    <View style={{flex: 1, backgroundColor: Colors.background}}>
      <View>
        {/*headerview */}
        <View style={styles.header}>
          <View
            style={{width: '100%', height: 47, top: 10, alignItems: 'center'}}>
            <Image
              style={{
                width: 55,
                height: 55,
                tintColor: '#fff',
                alignSelf: 'center',
              }}
              source={require('../Assets/appbar.png')}
            />
        <Text style={{color:Colors.backgroundcolor,fontSize:18,fontWeight:'bold',top:5}}>HOME SERVE</Text>
          </View>
         
        </View>
        <View
          style={{
            backgroundColor: Colors.primarycolor,
            height: 65,
            borderBottomLeftRadius: 15,
            borderBottomEndRadius: 15,
          
          }}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 16,
              fontWeight: 'bold',
              color: Colors.backgroundcolor,top:20
            }}>
            Login
          </Text>
        </View>
      </View>
      <View style={styles.mainView}>
        <View style={{bottom: 10}}>
          <Text style={styles.text}>Email/Mobile No</Text>
          <TextInput
            style={styles.textInput}
            placeholder=" Email/Mobile No"
            placeholderTextColor="grey"
            underlineColorAndroid="transparent"
            onChangeText={name => setusername(name)}></TextInput>
        </View>
        <View style={{top: -15}}>
          <Text style={styles.text}>Password</Text>
          <TextInput
            style={styles.textInput}
            placeholder=" Password"
            placeholderTextColor="grey"
            // underlineColorAndroid="white"
            secureTextEntry={true}
            inlineImageLeft="search_icon"
            onChangeText={name => setpassword(name)}></TextInput>
        </View>

        <View>
          <TouchableOpacity
          onPress={() => navigation.navigate('MyTabs')}
            style={{
              top: '4%',
              left: '4%',
              width: '92%',
              height: 40,
             
              alignItems: 'center',
              borderRadius: 12,
              backgroundColor: Colors.primarycolor,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                top:8,
                fontSize: 16,
                alignItems: 'center',
                textAlign: 'center',
              }}>
              LOGIN
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
        onPress={() => navigation.navigate('Register')}
          style={{
            top: 25,
            height: 45,
            width: 240,
            left: 60,
            alignItems: 'center',
          }}>
          <Text style={{color: Colors.secondaryText, textAlign: 'center'}}>
            Not registered yet,
            <Text style={{color: Colors.primarycolor, fontWeight: '700'}}>
              Register Now
            </Text>
          </Text>
        </TouchableOpacity>
        {/* <View>
            <TouchableOpacity style={{top:230,left:75,width:200,height:55,padding:15,textAlign:'center',alignItems:'center',borderRadius:12,backgroundColor:Colors.primarycolor}}>
      <Text style={{color:'white',fontWeight:'bold',fontSize:18,alignItems:'center',textAlign:'center'}}>REGISTER</Text></TouchableOpacity>
  </View> */}
      </View>
    </View>
  );
};
export default Login;
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 140,
    flexDirection: 'row',
    paddingTop: 1,
    alignItems: 'center',
    //padding:2,
    // paddingLeft:2,
    elevation: 0,
    // borderBottomColor:'grey',
    backgroundColor: Colors.primarycolor,
    // justifyContent:'center'
  },
  text: {
    fontSize: 15,
    marginTop: StatusBar.currentHeight || 0,
    fontWeight: 'bold',
    color: Colors.primarycolor,
    paddingLeft: 20,
    // top: 5,
  },
  mainView: {
    flexDirection: 'column',
    top: 40,
    height: 700,
  },
  textInput: {
    marginTop: 5,
    width: '92%',
    height: 40,
    elevation: 0,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: Colors.secondaryText,
    left: "4%",
    right:'4%'
    // marginTop: StatusBar.currentHeight || 0,
  },
  button: {
    backgroundColor: Colors.primarycolor,
    width: '25%',
    height: 30,
    borderRadius: 7,
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 60,
    left: 130,
    elevation: 3,
  },
});
