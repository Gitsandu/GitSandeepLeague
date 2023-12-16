import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import {CubeNavigationHorizontal} from 'react-native-3dcube-navigation';
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
import imageIcon from './img/bookmarkOutline.jpg';
import imageIcon02 from './img/favBorder.jpg';
import Icon from 'react-native-vector-icons/Ionicons'; 

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ColorCube = ({route}) => {
  const cube = useRef(null);

  const imageCubeRef = useRef(null);
  const textCubeRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const {cardDetails} = route.params;
  console.log('cardDetails', cardDetails);

  const details = [
    {
      id: 1,
      image: image1,
      num: '01',
      heading: 'WHO IS SANDEEP',
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

  const matchingDetails = details.filter(item => item.id === cardDetails.id);
  // console.log('matchingDetails', matchingDetails);

  const matchingIndex = details.findIndex(item => item.id === cardDetails.id);
  // console.log('matchingIndex', matchingIndex);

  // const visibleDetails = details.slice(0, 4);

  const visibleDetails =
    matchingIndex >= 0 ? details.slice(matchingIndex, matchingIndex + 4) : [];

  // console.log('visibleDetails', visibleDetails);

  callBackAfterSwipe = (position, index) => {
    setCurrentIndex(index);
    if (textCubeRef.current) {
      textCubeRef.current.scrollTo(index, true); // Scroll to the corresponding index on the text cube
    }
    if (imageCubeRef.current) {
      imageCubeRef.current.scrollTo(index, true); // Scroll to the corresponding index on the text cube
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainCont}>
        <View style={[styles.main, {backgroundColor: 'red'}]}>
          <CubeNavigationHorizontal
            ref={imageCubeRef}
            loop={true}
            callBackAfterSwipe={this.callBackAfterSwipe}
            expandView={true}
            responderCaptureDx={10}>
            {visibleDetails.map((item, index) => (
              <View style={styles.subMain}>
                <TouchableOpacity style={styles.leftIcon}>
                  <Icon name="close" size={30} color="black" onPress={() => console.log('close pressed')} />
                </TouchableOpacity>
                <View style={styles.RightIcon}>
                  <Icon name="menu" size={30} color="black" onPress={() => console.log('Menu pressed')} />
                </View>
                <ImageBackground
                  style={styles.imageBack}
                  source={item.image}></ImageBackground>
                <Image style={styles.image} source={item.image}></Image>
                <View style={styles.paginator}>
                  {visibleDetails.map((_, dotIndex) => (
                    <View
                      key={dotIndex}
                      style={[
                        styles.dot,
                        {
                          backgroundColor:
                            dotIndex === index ? 'white' : 'gray',
                        },
                      ]}
                    />
                  ))}
                </View>
                <View style={styles.imgCont} >
                  <Icon name="heart" size={30} color="black" onPress={() => console.log('close pressed')} />
                </View>
                
              </View>
            ))}
          </CubeNavigationHorizontal>
        </View>
        <View style={[styles.main, {height: height * 0.5}]}>
          <CubeNavigationHorizontal
            ref={textCubeRef}
            callBackAfterSwipe={this.callBackAfterSwipe}
            loop={true}
            expandView={true}
            responderCaptureDx={10}>
            {visibleDetails.map((item, index) => (
              <View style={styles.subCont}>
                <View style={styles.subCont02}>
                  <Text style={styles.issueText}>ISSUE N</Text>
                  <Text style={styles.headNumber}>{item.num}</Text>
                  <Text style={styles.mainText}>{item.heading}</Text>
                  <Text style={styles.descText}>{item.desc}</Text>
                </View>
                <View style={styles.imgTextCont} >
                  <Icon name="star" size={30} color="black" onPress={() => console.log('close pressed')} />
                </View>
              </View>
            ))}
          </CubeNavigationHorizontal>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'red',
    flex: 1,
  },
  image: {
    width: '80%',
    height: '45%',
    position: 'relative',
    top: "8%",
    elevation: 10, // Elevation for Android (adds a shadow)
    shadowColor: 'black', // Shadow color for iOS
    shadowOpacity: 1, // Opacity of the shadow for iOS
    shadowRadius: 1,
    borderColor: 'white',
    borderWidth: 2,
  },
  mainCont: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  main: {
    width: '100%',
    height: '97%',
  },
  subCont: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    position: 'absolute',
    width: '100%',
    height: '100%',
    paddingRight: 50,
  },
  subCont02: {
    position: 'relative',
    top: "-10%",
    left: "5%",
  },
  issueText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  headNumber: {
    color: 'black',
    fontSize: 95,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  mainText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  descText: {
    color: 'grey',
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  subMain: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  imageBack: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  paginator: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10, // Adjust the spacing as needed
    position: 'relative', 
    top: "17%"
  },
  dot: {
    width: 15,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 5, // Adjust the spacing between dots as needed,
  },
  imgCont:{
    position:'relative',
    top: "7.5%",
    left: "34.5%",
    backgroundColor:'white',
    width:'12%',
    height:'15%',
  },
  imgTextCont:{
    position:'absolute',
    width:'14%',
    height:'6%',
    left: "90%",
    backgroundColor:'green'
  },
  leftIcon:{
    position:'relative',
    top:'11%',
    left:'-40%',
    backgroundColor:'white',
    width:'10%',
    height:'5%',
    zIndex:2,
    borderRadius:50
  },
  RightIcon:{
    position:'relative',
    top:'6%',
    left:'40%',
    backgroundColor:'white',
    width:'10%',
    height:'5%',
    zIndex:2,
    borderRadius:10
  }
});

export default ColorCube;
