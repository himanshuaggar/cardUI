import { View, Text, SafeAreaView, Dimensions, Image, Animated, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

import card from '../../assets/img/card.png';
import card2 from '../../assets/img/freeze.png';
import redsnow from '../../assets/img/redsnowflake.png';
import snow from '../../assets/img/snowflake.png';

const Home = () => {
  const [image, setImage] = useState(card);
  const [isFrozen, setIsFrozen] = useState(true);
  const fadeAnim = useState(new Animated.Value(0))[0];

  const handlePress = () => {

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => setImage(image === card ? card2 : card));

    setIsFrozen(!isFrozen);
  };

  const { width, height } = Dimensions.get('screen');

  return (
    <SafeAreaView style={styles.container} >
      <View>
        <Text style={styles.heading}>Select Payment mode</Text>
        <Text style={styles.subheading}>choose your preferred payment method to make payment.</Text>
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.payOptionContainer}
          ><Text style={styles.payText}>
            pay
          </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardContainer}>
            <Text style={styles.cardText}>
            card
          </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.cardHeading}>YOUR DIGITAL DEBIT CARD</Text>
        <View>
          <View style={styles.debitCardContainer}>
            <Animated.Image source={image} width={200} height={300} resizeMode="contain" style={{ opacity: fadeAnim }} />

            <View style={styles.freezeCOntainer}>
              <TouchableOpacity style={styles.freezeButton} onPress={handlePress}>
                <View style={styles.freezeButtonInner}>
                  <Image
                    source={isFrozen ? snow : redsnow}
                    style={styles.freezeIcon}
                  />
                </View>
                <Text style={{
                  color: isFrozen ? 'white' : 'red',
                  fontSize: 14,
                  marginTop: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}> {isFrozen ? 'Freeze' : 'Unfreeze'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    height: height,
    width: width,
    backgroundColor: 'black',
    color: 'black',
  },
  heading:{
    fontWeight: '600',
    color: 'white',
    fontSize: 30,
    marginTop: 20,

  },
  subheading:{
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
  payOptionContainer :{
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
  cardContainer : {
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
  cardHeading:{
    color: '#d3d3d3',
    fontSize: 14,
    marginTop: 40,
  },
  debitCardContainer :{
    flexDirection: 'row',
    justifyContent: 'flex-start',

  },
  freezeCOntainer : {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  freezeButton:{
    alignItems: 'center',
    justifyContent: 'center',

  },
  freezeButtonInner:{
    borderRadius: 999,
    borderColor: 'white',
    borderWidth: 0.1,
    borderStyle: 'solid',
    padding: 10,

  },
  freezeIcon:{
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
  }

})

export default Home