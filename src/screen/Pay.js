import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Image,
  Animated,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import card from '../../assets/img/card.png';
import card2 from '../../assets/img/freeze.png';
import snow from '../../assets/img/snowflake.png';
import redsnow from '../../assets/img/redsnowflake.png';

const {width, height} = Dimensions.get('screen');

const Pay = () => {
  const [isFrozen, setIsFrozen] = useState(true);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardholderName: '',
    expDate: '',
  });

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    fetchCardDetails();
  }, []);

  const formatCardNumber = cardNumber => {
    return cardNumber.match(/.{1,4}/g).join('\n');
  };

  const fetchCardDetails = async () => {
    try {
      const response = await axios.get(
        'https://fakerapi.it/api/v1/credit_cards',
      );
      const {data} = response.data;
      console.log(data);

      if (data && data.length > 0) {
        const cardData = data[0];
        console.log(cardData);
        const formattedCardNumber = formatCardNumber(cardData.number);
        console.log(formattedCardNumber);
        setCardDetails({
          cardNumber: formattedCardNumber,
          cardholderName: cardData.owner,
          expDate: cardData.expiration,
        });
      }
    } catch (error) {
      console.error('Error fetching card details:', error);
    }
  };

  const handlePress = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    setIsFrozen(!isFrozen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.heading}>Select Payment mode</Text>
        <Text style={styles.subheading}>
          choose your preferred payment method to make payment.
        </Text>
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.payOptionContainer}>
            <Text style={styles.payText}>pay</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardContainer}>
            <Text style={styles.cardText}>card</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.cardHeading}>YOUR DIGITAL DEBIT CARD</Text>
        <View>
          <View style={styles.debitCardContainer}>
            {isFrozen ? (
              <Image source={card2} />
            ) : (
              <View
                style={{
                  height: 440,
                  width: 270,
                }}>
                <View
                  style={{
                    height: 296,
                    width: 186,
                    backgroundColor: 'black',
                    shadowColor: 'white',
                    shadowOpacity: 1,
                    display: 'flex',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    borderColor: '#808080',
                    borderRadius: 20,
                    padding: 10,
                    marginTop: 60,
                    marginHorizontal: 15,
                  }}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Image
                      source={require('../../assets/img/yolo_logo.png')}
                      height={50}
                      width={100}
                    />
                    <Image
                      source={require('../../assets/img/yes_logo.png')}
                      height={50}
                      width={100}
                    />
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      marginVertical: 20,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingHorizontal: 10,
                      gap: 20,
                    }}>
                    <Text
                      style={{color: 'white', fontWeight: '500', fontSize: 24}}>
                      {cardDetails.cardNumber}
                    </Text>
                    <View style={{display: 'flex'}}>
                      <View>
                        <Text
                          style={{
                            color: '#808080',
                            fontWeight: '200',
                            marginBottom: 5,
                          }}>
                          expiry
                        </Text>
                        <Text
                          style={{
                            color: 'white',
                            marginBottom: 5,
                            fontWeight: '300',
                          }}>
                          {cardDetails.expDate}
                        </Text>
                      </View>
                      <Text
                        style={{
                          color: '#808080',
                          fontWeight: '200',
                          marginBottom: 5,
                        }}>
                        CVV
                      </Text>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            color: 'white',
                            fontWeight: '700',
                            marginBottom: 5,
                            marginRight: 10,
                            fontSize: 20,
                          }}>
                          ***
                        </Text>
                        <Image
                          source={require('../../assets/img/hide.png')}
                          height={5}
                          width={5}
                          resizeMode="contain"
                        />
                      </View>
                    </View>
                  </View>
                  <View>
                    <TouchableOpacity
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        paddingHorizontal: 5,
                      }}>
                      <Image source={require('../../assets/img/u_copy.png')} />
                      <Text style={{color: 'red', paddingHorizontal: 5}}>
                        copy details
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      marginTop: 20,
                      position: 'absolute',
                      right: 10,
                      bottom: 14,
                    }}>
                    <Image
                      source={require('../../assets/img/rupay_logo.png')}
                    />
                  </View>
                </View>
              </View>
            )}

            <View style={styles.freezeCOntainer}>
              <TouchableOpacity
                style={styles.freezeButton}
                onPress={handlePress}>
                <View style={styles.freezeButtonInner}>
                  <Image
                    source={isFrozen ? snow : redsnow}
                    style={styles.freezeIcon}
                  />
                </View>
                <Text
                  style={{
                    color: isFrozen ? 'white' : 'red',
                    fontSize: 14,
                    marginTop: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  {' '}
                  {isFrozen ? 'Freeze' : 'Unfreeze'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: width,
    backgroundColor: 'black',
    color: 'black',
  },
  heading: {
    fontWeight: '600',
    color: 'white',
    fontSize: 30,
    marginTop: 20,
  },
  subheading: {
    color: '#d3d3d3',
    fontSize: 20,
    marginTop: 10,
  },
  optionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
  },
  payOptionContainer: {
    padding: 5,
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 2,
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 0,
  },
  payText: {
    color: 'white',
    fontSize: 20,
    paddingHorizontal: 10,
  },
  cardContainer: {
    padding: 5,
    borderRadius: 50,
    borderColor: 'red',
    borderWidth: 2,
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 0,
  },
  cardText: {
    color: 'red',
    fontSize: 20,
    paddingHorizontal: 10,
  },
  cardHeading: {
    color: '#d3d3d3',
    fontSize: 14,
    marginTop: 40,
  },
  debitCardContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  freezeCOntainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  freezeButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  freezeButtonInner: {
    borderRadius: 999,
    borderColor: 'white',
    borderWidth: 0.1,
    borderStyle: 'solid',
    padding: 10,
  },
  freezeIcon: {
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Pay;
