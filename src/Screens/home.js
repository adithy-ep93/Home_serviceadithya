import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
  StatusBar,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SliderBox} from 'react-native-image-slider-box';
import {Rating, AirbnbRating} from 'react-native-elements';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';

import colors from '../config/colors';
import Colors from '../config/colors';

import AccordionView from '../components/Collapsible';


export default Home = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);

  const [place, setplace] = useState('Banglore');
  console.log(place);
  const press = k => {
    setSelectedId(k);

    DATA.filter(on => {
      if (on.id === k) {
        const kk = on.location;
        setplace(kk);
      }
    });
  };

  const renderItem = ({item}) => {
    const borderColor =
      item.id === selectedId ? Colors.primarycolor : Colors.secondaryText;
    const borderWidth = item.id === selectedId ? 2 : 0.5;
    return (
      <Item
        item={item}
        location={place}
        onPress={() => {
          press((k = item.id));
        }}
        // backgroundColor={{backgroundColor}}
        borderWidth={{borderWidth}}
        borderColor={{borderColor}}
        // textColor={{color}}
      />
    );
  };

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  image = [
    require('../Assets/1.png'),
    require('../Assets/2.png'),
    require('../Assets/3.png'),
  ];
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: Colors.backgroundcolor,
      }}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center',
            top: 8,
          }}>
          <Image
            source={require('../Assets/appbar.png')}
            style={{
              tintColor: '#fff',
              height: 45,
              width: 45,
            }}
          />
          <Text style={{color: '#fff', top: 11, fontWeight: 'bold', left: 6}}>
            HOME SERVE
          </Text>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            height: 370,
            width: '100%',
            backgroundColor: colors.primarycolor,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
              }}>
              {/* <ModalAddress /> */}

            
                <TouchableOpacity
                  style={{flexDirection: 'row'}}
                  onPress={() => {
                    toggleModal();
                  }}
                  // onPress={() => {
                  //   navigation.navigate("Cleaning")
                  // }}
                >
                  <Text style={{color: '#fff', top: 5}}>{place} </Text>
                  <FontAwesome
                    name={'angle-down'}
                    color="#fff"
                    style={{top: 10, left: 4}}
                  />

                  <Modal
                    isVisible={isModalVisible}
                    hasBackdrop={true}
                    backdropOpacity={0}
                    style={{
                      backgroundColor: 'rgba(52, 52, 52, alpha)',
                      padding: 0,
                      margin: 0,
                    }}
                    onBackdropPress={() => {
                      toggleModal();
                    }}>
                    <View
                      style={{
                        backgroundColor: colors.backgroundcolor,
                        width: '100%',
                        height: 230,
                        bottom: -270,
                      }}>
                      <Text
                        style={{
                          color: Colors.primarycolor,
                          fontWeight: 'bold',
                          fontSize: 16,
                          top: 10,
                          left: 15,
                        }}>
                        Choose Your Address
                      </Text>

                      <View
                        style={{
                          top: 20,
                          left: 15,
                          paddingRight: 15,
                        }}>
                        {/* <Addressbox /> */}

                        <FlatList
                          nestedScrollEnabled
                          horizontal={true}
                          data={DATA}
                          renderItem={renderItem}
                          keyExtractor={item => item.id}
                          extraData={selectedId}
                        />
                        <View>
                          <TouchableOpacity
                          style={{flexDirection:'row'}}
                            onPress={e => {
                              navigation.navigate('Addaddress');
                            }}>
                            <Ionicons
                              name={'location'}
                              color={Colors.primarycolor}
                              size={30}
                              style={{top: 10, left: 4}}
                            />
                            <Text
                              style={{
                                color: Colors.primarycolor,
                                fontSize: 15,
                                fontWeight: '700',
                                top: 15,
                                left: 5,
                              }}>
                              Add an address
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </Modal>
                </TouchableOpacity>
             

              <View
                style={{
                  flexDirection: 'row',
                  borderColor: '#fff',
                  borderWidth: 1,
                  borderRadius: 10,
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 2,
                  paddingBottom: 2,
                  height: 25,
                  top: 5,
                }}>
                <MaterialCommunityIcons
                  name={'phone-in-talk'}
                  color="#fff"
                  style={{top: 5}}
                />
                <Text style={{color: '#fff'}}> +91 9876543256</Text>
              </View>
            </View>
          </View>
          <View style={{}}>
            <FontAwesome
              name={'search'}
              color="rgba(191, 191, 205, 1)"
              size={20}
              style={{top: 20, left: 15, position: 'absolute', zIndex: 2}}
            />
            <TextInput
              placeholder="Search for a service"
              placeholderTextColor="rgba(191, 191, 205, 1)"
              style={{
                borderRadius: 10,
                margin: 10,
                height: 40,
                backgroundColor: Colors.backgroundcolor,
                paddingLeft: 30,
              }}
            />
          </View>
          <View style={{borderBottomLeftRadius: 10}}>
            <SliderBox
              images={image}
              autoplay={true}
              circleLoop
              ImageComponentStyle={{
                borderRadius: 15,
                // width: 20,
                marginTop: 5,
                borderRadius: 15,
              }}
              style={{
                start: '4%',
                right: '4%',
                width: '92%',
                top: 10,
                borderRadius: 15,
                height: 220,
                borderBottomLeftRadius: 15,
              }}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 0,
                top: 35,
                padding: 0,
                margin: 0,
              }}
            />
          </View>
        </View>
        <View style={{top: 10, height: 248}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity
              style={styles.continer}
              onPress={() => navigation.navigate('Cleaning')}>
              <Image
                source={require('../Assets/clean.png')}
                style={styles.img}
              />
              <Text style={styles.text}>Cleaning & Sanitization</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.continer}
              onPress={() => navigation.navigate('AcServices')}>
              <Image source={require('../Assets/ac.png')} style={{}} />
              <Text
                style={(styles.text, {top: 5, color: colors.secondaryText})}>
                AC Service &
              </Text>
              <Text style={styles.text}> Repair</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.continer}
              onPress={() => navigation.navigate('Ele')}>
              <Image source={require('../Assets/ele.png')} style={{}} />
              <Text style={styles.text}>Electrical </Text>
              <Text style={styles.text}>Work </Text>
            </TouchableOpacity>
          </View>
          {/* second row */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              top: 10,
            }}>
            <TouchableOpacity
              style={styles.continer}
              onPress={() => navigation.navigate('Appliancesrepair')}>
              <Image source={require('../Assets/f.png')} style={{}} />
              <Text style={styles.text}>Appliance</Text>
              <Text style={styles.text}> Repair</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.continer}
              onPress={() => navigation.navigate('Plumbing')}>
              <Image source={require('../Assets/pu.png')} style={{}} />
              <Text
                style={(styles.text, {top: 5, color: colors.secondaryText})}>
                Plumbing
              </Text>
              <Text style={styles.text}> Work</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.continer}
              onPress={() => navigation.navigate('InteriorDesigning')}>
              <Image source={require('../Assets/in.png')} style={{}} />
              <Text style={styles.text}>Interior </Text>
              <Text style={styles.text}>Designing </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* second part */}
        <View>
          <View
            style={{
              backgroundColor: Colors.continercolor,
              height: 250,
              width: '94%',
              borderRadius: 15,
              left: '4%',
              right: '4%',
              top: 15,
              //backgroundColor:'blue'
            }}>
            <View
              style={{justifyContent: 'center', alignItems: 'center', top: 5}}>
              <Text
                style={{
                  color: Colors.primarycolor,
                  fontWeight: 'bold',
                  fontSize: 16,
                  justifyContent: 'center',
                }}>
                Our Workflow
              </Text>
              <Image source={require('../Assets/Line.png')} />
              <Text style={{color: Colors.primarycolor, top: 4, fontSize: 12}}>
                Enjoy our quality services at just 3 easy steps
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                top: 10,
              }}>
              <View style={styles.stepview}>
                {/* step1 */}
                <Text style={styles.txtstep1}>Step 1</Text>

                <View style={styles.stepbox}>
                  <Image
                    source={require('../Assets/step1.png')}
                    style={{marginTop: 5}}
                  />
                </View>
                <Text
                  style={{
                    color: Colors.primarycolor,
                    fontWeight: 'bold',
                    top: 20,
                    textAlign: 'center',
                  }}>
                  Schedule
                  {'\n'}
                  your service
                </Text>
                <View style={{top: 30}}>
                  <Text
                    style={{
                      color: Colors.primarycolor,
                      fontSize: 12,
                      textAlign: 'center',
                    }}>
                    Fill Credentials,
                    {'\n'}
                    Book & Relax
                  </Text>
                </View>
              </View>
              {/* 1st step close  */}

              <View style={styles.stepview}>
                {/* step2 */}
                <Text style={styles.txtstep1}>Step 1</Text>
                <View style={styles.stepbox}>
                  <Image source={require('../Assets/step2.png')} />
                </View>
                <Text
                  style={{
                    color: Colors.primarycolor,
                    fontWeight: 'bold',
                    top: 10,
                    textAlign: 'center',
                  }}>
                  Service at
                  {'\n'}
                  your home
                </Text>
                <View style={{top: 15}}>
                  <Text
                    style={{
                      color: Colors.primarycolor,
                      fontSize: 12,
                      textAlign: 'center',
                    }}>
                    Keep Calm, We Will
                    {'\n'}
                    Serve At Your Door
                  </Text>
                </View>
              </View>

              <View style={styles.stepview}>
                {/* step 3 */}
                <Text style={styles.txtstep1}>Step 1</Text>

                <View style={styles.stepbox}>
                  <Image
                    source={require('../Assets/step3.png')}
                    style={{marginTop: 5}}
                  />
                </View>
                <Text
                  style={{
                    color: Colors.primarycolor,
                    fontWeight: 'bold',
                    top: 20,
                    textAlign: 'center',
                  }}>
                  Pay after
                  {'\n'}
                  service
                </Text>
                <View style={{top: 30}}>
                  <Text
                    style={{
                      color: Colors.primarycolor,
                      fontSize: 12,
                      textAlign: 'center',
                    }}>
                    Make Payment After
                    {'\n'}
                    work completion
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* thired part */}
        <View
          style={{
            backgroundColor: Colors.continercolor,
            width: '92%',
            height: 160,
            left: '4%',

            top: 30,
            borderRadius: 15,
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                color: Colors.primarycolor,
                fontWeight: 'bold',
                fontSize: 16,
                borderBottomWidth: 2,
                borderBottomColor: 'rgba(51, 52, 88, 0.06)',
              }}>
              HOME SERVE Assurance
            </Text>
          </View>
          <ScrollView
            horizontal={true}
            style={{top: 15, left: 10, width: '92%'}}>
            <View style={{right: 10}}>
              <Image source={require('../Assets/s1.png')} />
            </View>
            <View style={{left: 10}}>
              <Image source={require('../Assets/s2.png')} />
            </View>
            <View style={{left: 20}}>
              <Image source={require('../Assets/s3.png')} />
            </View>
            <View style={{left: 30, marginRight: 40}}>
              <Image source={require('../Assets/s4.png')} />
            </View>
          </ScrollView>
        </View>
        {/* fourth part */}
        <View
          style={{
            backgroundColor: Colors.continercolor,
            width: '92%',
            height: 160,
            left: '4%',
            paddingStart: 15,
            top: 45,
            borderRadius: 15,
          }}>
          <View style={{alignItems: 'flex-start', top: 4}}>
            <Text
              style={{
                color: Colors.primarycolor,
                fontWeight: 'bold',
                fontSize: 16,
                borderBottomWidth: 2,
                borderBottomColor: 'rgba(51, 52, 88, 0.06)',
              }}>
              {' '}
              Customer Satisfaction is our Priority
            </Text>
          </View>
          <ScrollView horizontal={true} style={{right: 7}}>
            {/* feedback part */}
            <View
              style={{
                top: 10,
                backgroundColor: '#fff',
                height: 110,
                width: 290,
                borderRadius: 15,
                left: 5,
              }}>
              <View>
                <View style={{flexDirection: 'row', top: 5}}>
                  <Image
                    source={require('../Assets/us.png')}
                    style={{top: 5}}
                  />
                  <View>
                    <Text
                      style={{color: Colors.primarycolor, fontWeight: 'bold'}}>
                      Maneesha Yadav
                    </Text>
                    <Rating
                      ratingCount={5}
                      startingValue={5}
                      readonly={true}
                      imageSize={10}
                      style={{left:-25}}

                      // style={{paddingVertical: 10}}
                    />
                  </View>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: Colors.primarycolor,
                      padding: 7,

                      top: 4,
                    }}>
                    “Amet minim mollit non deserunt uAmet minim mollit non
                    deserunt u mjfvet minim mollit non Amet minim mollit non
                    deserunt uAmet minim Amet minim mollit non deserunt uAmet .”
                  </Text>
                </View>
              </View>
            </View>

            {/* second feedback */}
            <View
              style={{
                top: 10,
                backgroundColor: '#fff',
                height: 110,
                width: 290,
                borderRadius: 15,
                left: 15,
              }}>
              <View>
                <View style={{flexDirection: 'row', top: 5}}>
                  <Image
                    source={require('../Assets/us.png')}
                    style={{top: 5}}
                  />
                  <View>
                    <Text
                      style={{color: Colors.primarycolor, fontWeight: 'bold'}}>
                      Maneesha Yadav
                    </Text>
                    <Rating
                      ratingCount={5}
                      startingValue={5}
                      readonly={true}
                      imageSize={10}
                      style={{left:-25}}
                      // style={{paddingVertical: 10}}
                    />
                  </View>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: Colors.primarycolor,
                      padding: 7,
                      top: 4,
                    }}>
                    “Amet minim mollit non deserunt uAmet minim mollit non
                    deserunt u mjfvet minim mollit non Amet minim mollit non
                    deserunt uAmet minim Amet minim mollit non deserunt uAmet ”
                  </Text>
                </View>
              </View>
            </View>
            {/* feedback thired */}
            <View
              style={{
                top: 10,
                backgroundColor: '#fff',
                height: 110,
                width: 290,
                borderRadius: 15,
                left: 25,
                marginRight: 30,
              }}>
              <View>
                <View style={{flexDirection: 'row', top: 5}}>
                  <Image
                    source={require('../Assets/us.png')}
                    style={{top: 5}}
                  />
                  <View>
                    <Text
                      style={{color: Colors.primarycolor, fontWeight: 'bold'}}>
                      Maneesha Yadav
                    </Text>
                    <Rating
                      ratingCount={5}
                      startingValue={5}
                      readonly={true}
                      imageSize={10}
                      style={{left:-25}}
                      // style={{paddingVertical: 10}}
                    />
                  </View>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: Colors.primarycolor,
                      padding: 7,
                      top: 4,
                    }}>
                    “Amet minim mollit non deserunt uAmet minim mollit non
                    deserunt u mjfvet minim mollit non Amet minim mollit non
                    deserunt uAmet minim Amet minim mollit non deserunt uAmet ”
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        {/* Fiveth part */}
        <View
          style={{
            // backgroundColor: Colors.continercolor,
            width: '92%',
            left: '4%',
            right: '4%',
            top: 50,
            height: 250,
            borderRadius: 15,
          }}>
          <View style={{}}>
            <AccordionView />
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            height: 140,
            width: '100%',
            top: 500,
          }}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    paddingTop: 1,
    alignItems: 'center',
    elevation: 0,
    backgroundColor: Colors.primarycolor,
  },
  txtstep1: {
    color: Colors.primarycolor,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  stepbox: {
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(51, 52, 88, 0.06)',
    top: 5,
  },
  stepview: {
    padding: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: '900',
    // textAlign:'center',
    //alignItems:'center',
    fontWeight: 'bold',
    color: '#fff',
    paddingLeft: 10,
  },
  continer: {
    backgroundColor: Colors.continercolor,
    height: 112,
    width: 112,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 56,
    width: 52,
  },
  text: {
    fontSize: 12,
    color: colors.secondaryText,
  },
});

const DATA = [
  {
    id: '0',
    name: 'Ajmal',
    flat: 'house 25',
    street: 'main road',
    location: 'Mumbai',
  },
  {
    id: '1',
    name: 'Yafir',
    flat: 'house 26',
    street: 'main road',
    location: 'Banglore',
  },
  {
    id: '2',
    name: 'Jashim',
    flat: 'house 29',
    street: 'main road',
    location: 'Kochi',
  },
];

const Item = ({item, onPress, borderColor, borderWidth}) => (
  <TouchableOpacity onPress={onPress} style={{padding: 0, margin: 0}}>
    <View style={[Dstyles.box, borderColor, borderWidth]}>
      <Text
        style={{
          fontWeight: 'bold',
          color: Colors.primarycolor,
          top: 10,
          fontSize: 16,
        }}>
        {item.name}
      </Text>

      <Text
        style={{
          color: Colors.secondaryText,
          fontSize: 14,
          top: 8,
        }}>
        {item.flat}
      </Text>
      <Text
        style={{
          color: Colors.secondaryText,
          fontSize: 14,
          top: 8,
        }}>
        {item.street}
      </Text>
      <Text
        style={{
          color: Colors.secondaryText,
          fontSize: 14,
          top: 8,
        }}>
        street
      </Text>
      <Text
        style={{
          color: Colors.secondaryText,
          fontSize: 14,
          top: 8,
        }}>
        {item.location}
      </Text>
    </View>
  </TouchableOpacity>
);

const Dstyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },

  title: {
    fontSize: 32,
  },
  box: {
    borderWidth: 1,
    borderColor: colors.primarycolor,
    width: 120,
    height: 120,
    marginRight: 5,
    paddingLeft: 10,
  },
});
