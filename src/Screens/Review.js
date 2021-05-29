import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import Colors from '../config/colors';
import {Rating} from 'react-native-elements';

const Review = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.continercolor,height:'100%'}}>
      {/* <ScrollView style={{height: 990}}> */}
      <View>
        {/*headerview */}
        <View style={styles.header}>
          <TouchableOpacity
            style={{bottom: 15 , left: 20}}
            onPress={() => navigation.goBack()}>
            <AntDesign
              style={styles.iconItem}
              name="left"
              size={20}
              color={Colors.backgroundcolor}
            />
          </TouchableOpacity>
          <View
        style={{
          flexDirection: 'row',
          flex: 1,
          alignContent: 'center',
          justifyContent: 'center',
          bottom: 15,
          left:15
          // borderBottomLeftRadius:15,
          // borderBottomRightRadius:15
        }}>
        <Image
          source={require('../Assets/appbar.png')}
          style={{
            tintColor: '#fff',
            height: 45,
            width: 45,
          }}
        />
        <Text style={{color: '#fff',top:11,  fontWeight: 'bold', left: 6}}>
          HOME SERVE
        </Text>
      </View>
          {/* <View style={{width: 148, height: 47, paddingLeft: 90, top: 10}}>
            <Image
              style={{width: 45, height: 45, tintColor: '#fff'}}
              source={require('../Assets/Images/Home.png')}
            />
          </View>
          <Text style={styles.text}>HOME SERVE</Text>
        </View> */}
        {/* <View
          style={{
            backgroundColor: Colors.primarycolor,
            height: 45,
            borderBottomLeftRadius: 15,
            borderBottomEndRadius: 15,
            zIndex: 1,
          }}> */}
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 14,
              fontWeight: 'bold',
              color: Colors.backgroundcolor,
              top:20,
              textAlign:'center',
              right:140
            }}>
            My Reviews
          </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={{
            zIndex: 1,
            alignSelf: 'flex-end',
            right: 20,
            position: 'absolute',
            top: 525,
          }}>
          <AntDesign
            style={styles.iconItem}
            name="pluscircle"
            size={45}
            color={Colors.primarycolor}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.mainView}>
          <View
            style={styles.container}>
            <Text
              style={styles.txt}>
              Cleaning service
            </Text>
            <Rating
              ratingCount={5}
              startingValue={6}
              readonly={true}
              imageSize={15}
              style={{right: 115}}
            />
            <Text
              style={{
                color: Colors.secondaryText,
                fontWeight: '700',
                // left: 27,
                marginTop: 8,
                width: 310,
                // textAlign: 'justify',
                alignSelf: 'center',
                paddingBottom: 10,
              }}>
              “Amet minim mollit non deserunt uAmet minim mollit non deserunt u
              mjfvet minim mollit non Amet minim mollit non deserunt uAmet minim
              Amet minim mollit non deserunt uAmet minim Amet minim ffmolfmllit
              non deserunt uAmet minim mollit non deserunt u Amet minim mollit
              non Amet minim mollit non.”
            </Text>
          </View>

          <View
            style={styles.container}>
            <Text
              style={styles.txt}>
              Cleaning service
            </Text>
            <Rating
              ratingCount={5}
              startingValue={6}
              readonly={true}
              imageSize={15}
              style={{right: 115}}
            />
            <Text
              style={{
                color: Colors.secondaryText,
                fontWeight: '700',
                // left: 27,
                marginTop: 15,
                width: 310,
                // textAlign: 'justify',
                alignSelf: 'center',
                paddingBottom: 10,
              }}>
              “Amet minim mollit non deserunt uAmet minim mollit non deserunt u
              mjfvet minim mollit non Amet minim mollit non deserunt uAmet minim
              Amet minim mollit non deserunt uAmet minim Amet minim ffmolfmllit
              non deserunt uAmet minim mollit non deserunt u Amet minim mollit
              non Amet minim mollit non.”
            </Text>
          </View>
          <View
            style={styles.container}>
            <Text
              style={styles.txt}>
              Cleaning service
            </Text>
            <Rating
              ratingCount={5}
              startingValue={6}
              readonly={true}
              imageSize={15}
              style={{right: 115}}
            />
            <Text
              style={{
                color: Colors.secondaryText,
                fontWeight: '700',
                // left: 27,
                marginTop: 15,
                width: 310,
                // textAlign: 'justify',
                alignSelf: 'center',
                paddingBottom: 10,
              }}>
              “Amet minim mollit non deserunt uAmet minim mollit non deserunt u
              mjfvet minim mollit non Amet minim mollit non deserunt uAmet minim
              Amet minim mollit non deserunt uAmet minim Amet minim ffmolfmllit
              non deserunt uAmet minim mollit non deserunt u Amet minim mollit
              non Amet minim mollit non.”
            </Text>
          </View>
          <View
            style={styles.container}>
            <Text
              style={styles.txt}>
              Cleaning service
            </Text>
            <Rating
              ratingCount={5}
              startingValue={6}
              readonly={true}
              imageSize={15}
              style={{right: 115}}
            />
            <Text
              style={{
                color: Colors.secondaryText,
                fontWeight: '700',
                // left: 27,
                marginTop: 15,
                width: 310,
                // textAlign: 'justify',
                alignSelf: 'center',
                paddingBottom: 10,
              }}>
              “Amet minim mollit non deserunt uAmet minim mollit non deserunt u
              mjfvet minim mollit non Amet minim mollit non deserunt uAmet minim
              Amet minim mollit non deserunt uAmet minim Amet minim ffmolfmllit
              non deserunt uAmet minim mollit non deserunt u Amet minim mollit
              non Amet minim mollit non.”
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Review;
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 120,
    flexDirection: 'row',
    //top: 1,
    alignItems: 'center',
    //padding:2,
    // paddingLeft:2,
    elevation: 0,
    // borderBottomColor:'grey',
    backgroundColor: Colors.primarycolor,
    // justifyContent:'center'
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15
  },
  text: {
    fontSize: 15,

    fontWeight: 'bold',
    color: Colors.backgroundcolor,
    paddingLeft: -3,
    top: 5,
  },
  mainView: {
    flexDirection: 'column',
    height: '100%',
    width: '92%',
    left: '4%',
    right: '4%',
    paddingBottom:20
  },
  txt:{
    color: Colors.secondaryText,
    fontWeight: '700',
    left: 10,
    marginTop: 15,
  },
  container:{backgroundColor: '#fff', marginTop: 10, borderRadius: 15,width:'98%',left:'1%',right:'1%'},
});
