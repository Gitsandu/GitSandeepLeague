import React, {useRef} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  PanResponder,
  Image,
  TouchableOpacity,
  Text
} from 'react-native';

import image1 from './img/image1.jpg';
import image2 from './img/image2.jpg';
import image3 from './img/image3.jpg';
import image4 from './img/image4.jpg';
import image5 from './img/image5.jpg';
import image6 from './img/image6.jpg';
import image7 from './img/image7.jpg';
import image8 from './img/image8.jpg';
import image9 from './img/image9.jpg';
import image10 from './img/image10.jpg';
import Icon from 'react-native-vector-icons/Ionicons'; 

const scrwidth = Dimensions.get('window').width;
const scrheight = Dimensions.get('window').height;
import {useNavigation} from '@react-navigation/native';
import {Searchbar} from 'react-native-paper';

const cardData = [
  {
    id: 1,
    image: image1,
    num: '01',
    heading: 'Who is sandeep',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum alias dolorem dolores impedit',
    deg: "0deg"
  },
  {
    id: 2,
    image: image2,
    num: '02',
    heading: 'What does sandeep do',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum alias dolorem dolores impedit',
    deg: "10deg"
  },
  {
    id: 3,
    image: image3,
    num: '03',
    heading: "Sandeep's achievements",
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum alias dolorem dolores impedit',
    deg: "-10deg"
  },
  {
    id: 4,
    image: image4,
    num: '04',
    heading: "Sandeep's hobbies",
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum alias dolorem dolores impedit',
    deg: "10deg"
  },
  {
    id: 5,
    image: image5,
    num: '05',
    heading: "Sandeep's favorite places",
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum alias dolorem dolores impedit',
    deg: "-10deg"
  },
  {
    id: 6,
    image: image6,
    num: '06',
    heading: "Sandeep's future plans",
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum alias dolorem dolores impedit',
    deg: "10deg"
  },
  {
    id: 7,
    image: image7,
    num: '07',
    heading: "Sandeep's inspirations",
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum alias dolorem dolores impedit',
    deg: "-10deg"
  },
  {
    id: 8,
    image: image8,
    num: '08',
    heading: "Sandeep's favorite books",
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum alias dolorem dolores impedit',
    deg: "10deg"
  },
  {
    id: 9,
    image: image9,
    num: '09',
    heading: "Sandeep's favorite quotes",
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum alias dolorem dolores impedit',
    deg: "-10deg"
  },
  {
    id: 10,
    image: image10,
    num: '10',
    heading: "Sandeep's favorite quotes",
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum alias dolorem dolores impedit',
    deg: "10deg"
  },
];

function CardDeck(props) {
    const navigation = useNavigation();
  
    const panResponders = useRef(
      cardData.map((_, index) => {
        const pan = new Animated.ValueXY();
        return {
          pan,
          zIndex: cardData.length - index, // Set zIndex based on the index
          panResponder: PanResponder.create({
            onMoveShouldSetPanResponder: (_, gestureState) =>
              Math.abs(gestureState.dx) > 5,
            onPanResponderMove: (_, gestureState) => {
              pan.setValue({x: gestureState.dx, y: gestureState.dy});
            },
            onPanResponderRelease: (_, gesture) => {
              if (gesture.dx > 120) {
                Animated.timing(pan, {
                  toValue: {x: scrwidth, y: 0},
                  duration: 300,
                  useNativeDriver: true,
                }).start(() => {
                  console.log('Swiped to the right! Remove the card.');
                });
              } else if (gesture.dx < -120) {
                Animated.timing(pan, {
                  toValue: {x: -scrwidth, y: 0},
                  duration: 300,
                  useNativeDriver: true,
                }).start(() => {
                  console.log('Swiped to the left! Remove the card.');
                });
              } else {
                Animated.spring(pan, {
                  toValue: {x: 0, y: 0},
                  useNativeDriver: true,
                }).start();
              }
            },
          }),
        };
      }),
    ).current;
  
    return (
      <View style={styles.container}>
        {panResponders.map(({ pan, zIndex, panResponder }, index) => (
          <Animated.View
            key={cardData[index].id}
            style={[
              styles.card,
              {
                transform: [
                  {translateX: pan.x},
                  {translateY: pan.y},
                  {rotate: cardData[index].deg},
                ],
                zIndex,
              },
            ]}
            {...panResponder.panHandlers}>
            <TouchableOpacity
              onPress={() => {
                console.log(cardData[index]); // Log the cardData to the console
                navigation.navigate('ColorCube', {cardDetails: cardData[index]});
              }}
              style={styles.touch}>
              <Image source={cardData[index].image} style={styles.image} />
            </TouchableOpacity>
          </Animated.View>
        ))}
        
        <View style={styles.search}>
          <Searchbar
            placeholder="Search"
            onChangeText={this.onChangeSearch}
            style={styles.input}
          />
          <Text style={styles.text}>THE ARCHIVE</Text>
        </View>

        <View style={styles.navbar}>
          <TouchableOpacity style={styles.touches}>
          <Icon name="home" size={30} color="black" onPress={() => console.log('close pressed')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touches}>
          <Icon name="star" size={30} color="black" onPress={() => console.log('close pressed')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touches}>
          <Icon name="heart" size={30} color="black" onPress={() => console.log('close pressed')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touches}>
          <Icon name="menu" size={30} color="black" onPress={() => console.log('close pressed')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: scrwidth,
    height: scrheight,
    backgroundColor: 'white',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    width: 250,
    height: 300,
    justifyContent: 'center', // Center the content horizontally
    alignItems: 'center', // Center the content vertically
    position: 'absolute', // Use absolute positioning for cards to overlap
    elevation: 10, // Elevation for Android (adds a shadow)
    shadowColor: 'black', // Shadow color for iOS
    shadowOpacity: 1, // Opacity of the shadow for iOS
    shadowRadius: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  touch: {
    width: '100%',
    height: '100%',
  },
  navbar: {
    position: 'absolute',
    width: '100%',
    backgroundColor:'skyblue',
    height:'8%',
    bottom:'0%',
    display:'flex',
    flexDirection:'row',
    padding: 10, 
    justifyContent:'space-between'
  },
  touches:{
    width:'20%',
    height:'100%',
    backgroundColor:'white',
    borderRadius: 10
  },
  search: {
    position: 'absolute',
    width: '80%',
    top: "7%",
    left: "10%",
  },
  input:{
    backgroundColor:'skyblue'
  },
  text:{
    position:'relative',
    left:"30%",
    top: "20%",
    fontWeight:'bold'
  },
});

export default CardDeck;
