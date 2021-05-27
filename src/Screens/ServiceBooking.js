import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../config/colors';

import Modal from 'react-native-modal';

const ServiceBooking = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <View style={{flex: 1, backgroundColor: Colors.backgroundcolor}}>
      {/* <ScrollView style={{height: 700}}> */}
      {/*header*/}

      <View style={styles.header}>
        <View style={{flexDirection: 'row', top: -10}}>
          <TouchableOpacity
            style={{paddingLeft: 20, top: 7}}
            onPress={() => navigation.goBack(null)}
            >
            <AntDesign name="left" size={20} color="white"></AntDesign>
          </TouchableOpacity>
          <Image
            source={require('../Assets/appbar.png')}
            style={{
              height: 45,
              width: 45,
              tintColor: Colors.backgroundcolor,
              left: 80,
              top: 4,
            }}
          />
          <Text
            style={{
              fontSize: 15,
              color: Colors.backgroundcolor,
              fontWeight: 'bold',
              left: 81,
              top: 14,
            }}>
            HOME SERVE
          </Text>
        </View>
      </View>
      <View style={styles.mainView}>
        <Text style={styles.text1}>Your Service have been booked</Text>
        <Image
          style={{
            top: 30,
            left: 140,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          source={require('../Assets/plumbing/bookser.png')}></Image>
        <Text style={styles.text2}>
          Our Service Partner will be at your service on
        </Text>
        <Text style={styles.text3}>02 April 2020</Text>
        <Text style={styles.text4}>between</Text>
        <Text style={styles.text5}>10 AM to 11 AM</Text>
        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('MyBookings1');}}>
          <Text style={{color: Colors.secondaryText, fontWeight: '700'}}>
            Review Booking
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => {
            toggleModal();
          }}>
          <Text style={{color: Colors.backgroundcolor, fontWeight: '700'}}>
            Cancel Booking
          </Text>
        </TouchableOpacity>
        <View>
          <Modal
            animationType="pulse"
            transparent={true}
            isVisible={modalVisible}>
            <View style={styles.alertbox}>
              <View style={styles.modalView}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: '#333458',
                    marginStart: 20,
                  }}>
                  Alert
                </Text>
                <Text style={{fontSize: 14, marginTop: 10, marginStart: 20}}>
                  Are you sure to cancel booking ?
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 30,
                    marginStart: 10,
                  }}>
                  <TouchableOpacity
                    style={{backgroundColor: '#333458', height: 40, width: 140}}
                    onPress={() => {navigation.navigate('Home');}}>
                    <Text
                      style={{
                        color: '#ffffff',
                        textAlign: 'center',
                        marginTop: 10,
                      }}>
                      YES
                    </Text>
                  </TouchableOpacity>
                  <View style={{marginRight: 5}} />
                  <TouchableOpacity
                    style={{backgroundColor: '#333458', height: 40, width: 140}}
                    onPress={() => {setModalVisible(false);}}>
                    <Text
                      style={{
                        color: '#ffffff',
                        textAlign: 'center',
                        marginTop: 10,
                      }}>
                      NO
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
        <View style={styles.containers}>
          <Text
            style={{
              color: Colors.primarycolor,
              left: 72,
              top: 10,
              fontWeight: '700',
            }}>
            Things to be taken care of
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{
                top: 25,
                left: 25,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              source={require('../Assets/plumbing/handsani.png')}
            />
            <Image
              style={{
                top: 25,
                left: 65,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              source={require('../Assets/plumbing/mask.png')}
            />
            <Image
              style={{
                top: 25,
                left: 105,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              source={require('../Assets/plumbing/social.png')}
            />
          </View>
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
};
export default ServiceBooking;
const styles = StyleSheet.create({
  alertbox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    width: 310,
    height: 150,
    alignItems: 'flex-start',
    shadowColor: '#000',
    bottom: 25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalButton: {
    borderRadius: 8,
    marginLeft: 10,
    // right:20,
    width: 96,
    height: 32,
    // elevation: 2,
    backgroundColor: '#d1d1d1',
    // top:-10
  },
  header: {
    width: '100%',
    height: 90,
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
    color: Colors.secondaryText,
    paddingLeft: 10,
    paddingTop: 17,
  },
  mainView: {
    flexDirection: 'column',
    height: 700,
  },
  text1: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.primarycolor,
    paddingLeft: 10,
    paddingTop: 17,
  },
  text2: {
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    color: Colors.primarycolor,
    paddingLeft: 10,
    paddingTop: 40,
  },
  text3: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.primarycolor,
    paddingLeft: 10,
    paddingTop: 0,
  },
  text4: {
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    color: Colors.primarycolor,
    paddingLeft: 10,
    paddingTop: 0,
  },
  text5: {
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
    color: Colors.primarycolor,
    paddingLeft: 10,
    paddingTop: 0,
  },
  alert: {
    backgroundColor: Colors.backgroundColor,
  },
  button: {
    backgroundColor: Colors.backgroundcolor,
    width: '55%',
    height: 60,
    borderRadius: 7,
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 30,
    left: 90,
    borderWidth: 1,
    borderColor: Colors.secondaryText,
  },
  button1: {
    backgroundColor: Colors.primarycolor,
    width: '55%',
    height: 60,
    borderRadius: 7,
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 50,
    left: 90,
    borderWidth: 1,
    borderColor: Colors.secondaryText,
  },
  text6: {
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
    color: Colors.primarycolor,
    paddingLeft: 10,
    paddingTop: 97,
  },
  containers: {
    backgroundColor: Colors.continercolor,
    top: 70,
    //padding:70,
    height: 140,
    width: '90%',
    left: '5%',
    borderRadius: 10,
    right:'5%'
  },
});
