import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
// class AlbumDetail extends react

const AlbumDetail = (props) => {
  const { title, artist, url, image, thumbnail_image } = props.details;
  return (

    <Card>

        <Text>{title}</Text>
        <Text>{artist}</Text>

    </Card>
  )
}

export default AlbumDetail;
