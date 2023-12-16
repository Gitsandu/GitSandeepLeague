import React, {Component, useState} from 'react';
import Swiper from 'react-native-deck-swiper';
import {StyleSheet, View, Dimensions, Image, Text, TouchableOpacity} from 'react-native';
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
import {Searchbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons'; 


const {width, height} = Dimensions.get('window');

const details = [
  {
    id: 1,
    image: image1,
    num: '01',
    heading: 'Who is sandeep',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum alias dolorem dolores impedit',
  },
  {
    id: 2,
    image: image2,
    num: '02',
    heading: 'What does sandeep do',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum alias dolorem dolores impedit',
  },
  {
    id: 3,
    image: image3,
    num: '03',
    heading: "Sandeep's achievements",
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum alias dolorem dolores impedit',
  },
  {
    id: 4,
    image: image4,
    num: '04',
    heading: "Sandeep's hobbies",
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum alias dolorem dolores impedit',
  },
  {
    id: 5,
    image: image5,
    num: '05',
    heading: "Sandeep's favorite places",
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum alias dolorem dolores impedit',
  },
  {
    id: 6,
    image: image6,
    num: '06',
    heading: "Sandeep's future plans",
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum alias dolorem dolores impedit',
  },
  {
    id: 7,
    image: image7,
    num: '07',
    heading: "Sandeep's inspirations",
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum alias dolorem dolores impedit',
  },
  {
    id: 8,
    image: image8,
    num: '08',
    heading: "Sandeep's favorite books",
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum alias dolorem dolores impedit',
  },
  {
    id: 9,
    image: image9,
    num: '09',
    heading: "Sandeep's favorite quotes",
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum alias dolorem dolores impedit',
  },
  {
    id: 10,
    image: image10,
    num: '10',
    heading: "Sandeep's favorite quotes",
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum alias dolorem dolores impedit',
  },
];

export default class CardSwiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardIndex: 0,
    };
  }

  onSwiped = (type, index) => {
    console.log(`on swiped ${type}`);
    const updatedIndex = (index + 1) % details.length;

    this.setState({
      cardIndex: updatedIndex,
    });
  };

  onSwipedAllCards = () => {
    // You can handle the event when all cards are swiped (if needed)
    console.log('All cards swiped');
  };

  swipeLeft = () => {
    const {cardIndex} = this.state;
    const tappedCardDetails = details[cardIndex];

    // console.log('Tapped Card Details:', tappedCardDetails);

    this.props.navigation.navigate('ColorCube', {
      cardDetails: tappedCardDetails,
    });
  };

  renderCard = index => {
    const cardDetails = details[index];

    const rotate = index === 0 ? '0deg' : index % 2 === 0 ? '7deg' : '-7deg';
    const translateX = index === 0 ? 0 : index % 2 === 0 ? 20 : -20;
    const translateY = index === 0 ? -10 : index % 2 === 0 ? -50 : -40;

    return (
      <View
        style={[
          styles.card,
          {
            transform: [
              {rotate: rotate},
              {translateX: translateX},
              {translateY: translateY},
            ],
            elevation: 10, // Elevation for Android (adds a shadow)
            shadowColor: 'black', // Shadow color for iOS
            shadowOpacity: 1, // Opacity of the shadow for iOS
            shadowRadius: 1,
          },
        ]}>
        <Image source={cardDetails.image} style={styles.image} />
      </View>
    );
  };

  onChangeSearch = query => {
    this.setState({searchQuery: query});
  };

  render() {
    const {searchQuery} = this.state;
    return (
      <View style={styles.container}>
        <Swiper
          ref={swiper => {
            this.swiper = swiper;
          }}
          backgroundColor={'white'}
          onSwiped={type => this.onSwiped(type, this.state.cardIndex)}
          onSwipedLeft={() => this.onSwiped('left', this.state.cardIndex)}
          onSwipedRight={() => this.onSwiped('right', this.state.cardIndex)}
          cards={[...Array(details.length).keys()]} // Dynamically generate cards based on details length
          cardIndex={this.state.cardIndex}
          cardHorizontalMargin={60}
          renderCard={index => this.renderCard(index)}
          onSwipedAll={this.onSwipedAllCards}
          stackSize={3}
          stackSeparation={15}
          animateOverlayLabelsOpacity
          animateCardOpacity
          onTapCard={this.swipeLeft}
          infinite={true}
          inputRotationRange={[-width / 2, 0, width / 2]} // Correct order
          outputRotationRange={['-10deg', '0deg', '10deg']}
          cardVerticalMargin={220}
          stackAnimationFriction={30}
          stackAnimationTension={100}
        />
        <View style={styles.search}>
          <Searchbar
            placeholder="Search"
            onChangeText={this.onChangeSearch}
            value={searchQuery}
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    width: width,
    height: height,
  },
  card: {
    width: width * 0.7, // Set card width to 50% of the screen width
    height: height * 0.4, // Set card height to 50% of the screen height
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent',
  },
  image: {
    width: '100%',
    height: '100%',
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
    top: "10%",
    fontWeight:'bold'
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
  }
});
