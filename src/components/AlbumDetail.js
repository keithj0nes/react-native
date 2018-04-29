import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';
// class AlbumDetail extends react

const AlbumDetail = (props) => {
  const { title, artist, url, image, thumbnail_image } = props.details;
  return (

    <Card>
      <CardItem>
        <View style={styles.thumbnailContainerStyle}>
          <Image
            source={{uri: thumbnail_image}}
            style={styles.thumbnailStyle}
          />
        </View>

        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardItem>

      <CardItem>
        <Image
          source={{uri: image}}
          style={styles.imageStyle}
        />
      </CardItem>

      <CardItem>
        <Button whenPressed={() => Linking.openURL(url)}>
          <Text>Buy Now!</Text>
        </Button>
      </CardItem>
    </Card>
  )
}


const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
}

export default AlbumDetail;
