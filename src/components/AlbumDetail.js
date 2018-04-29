import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
// class AlbumDetail extends react

const AlbumDetail = (props) => {
  const { title, artist, url, image, thumbnail_image } = props.details;
  return (

    <Card>
      <CardItem>
        <View>
          <Image source={{uri: thumbnail_image}} style={styles.thumbnailStyle} />
        </View>

        <View style={styles.headerContentStyle}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardItem>
    </Card>
  )
}


const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  }
}

export default AlbumDetail;
