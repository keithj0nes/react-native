import React from 'react';
import { View, Text } from 'react-native';

class AlbumList extends React.Component {
  state = {
    albums: []
  };


  componentWillMount(){
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => response.json())
      .then((data) => {
        this.setState({albums: data});
      })
  }

  render(){
    console.log(this.state, 'state');
    return (
      <View>
        <Text>Album List</Text>
      </View>
    )
  }
}

export default AlbumList;
