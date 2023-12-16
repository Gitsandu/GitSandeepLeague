import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import Swiper from 'react-native-deck-swiper';
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

const { width, height } = Dimensions.get('window');

class TiltedCard extends Component {
  render() {
    const details = [
      { id: 1, image: image1, num: '01', heading: 'Who is sandeep', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum alias dolorem dolores impedit' },
      { id: 2, image: image2, num: '02', heading: 'What does sandeep do', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum alias dolorem dolores impedit' },
      { id: 3, image: image3, num: '03', heading: 'Sandeep\'s achievements', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum alias dolorem dolores impedit' },
      { id: 4, image: image4, num: '04', heading: 'Sandeep\'s hobbies', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum alias dolorem dolores impedit' },
      { id: 5, image: image5, num: '05', heading: 'Sandeep\'s favorite places', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum alias dolorem dolores impedit' },
      { id: 6, image: image6, num: '06', heading: 'Sandeep\'s future plans', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum alias dolorem dolores impedit' },
      { id: 7, image: image7, num: '07', heading: 'Sandeep\'s inspirations', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum alias dolorem dolores impedit' },
      { id: 8, image: image8, num: '08', heading: 'Sandeep\'s favorite books', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum alias dolorem dolores impedit' },
      { id: 9, image: image9, num: '09', heading: 'Sandeep\'s favorite quotes', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum alias dolorem dolores impedit' },
      { id: 10, image: image10, num: '10', heading: 'Sandeep\'s favorite quotes', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum alias dolorem dolores impedit' },
    ];
    return (
      <View style={styles.container}>
        <Swiper
          cards={details}
          renderCard={(card, index) => {
            const rotate = index === 0 ? '0deg' : index % 2 === 0 ? '5deg' : '-5deg';
            return (
              <View style={[styles.card, { transform: [{ rotate: rotate }] }]} key={index}>
                <Image source={card.image} style={styles.image} resizeMode="cover" />
              </View>
            );
          }}
          onSwiped={(cardIndex) => {
            console.log(cardIndex);
          }}
          onSwipedAll={() => {
            console.log('onSwipedAll');
          }}
          cardIndex={0}
          backgroundColor={'#4FD0E9'}
          stackSize={3}
          // cardVerticalMargin={200}
          cardHorizontalMargin={50}
          onTapCard={this.swipeLeft}
        >
          {/* Add your additional components or buttons here */}
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    width: width,
    height: height,
  },
  card: {
    width: width*0.75,  // Set card width to 50% of the screen width
    height: height * 0.5,  // Set card height to 50% of the screen height
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default TiltedCard;
