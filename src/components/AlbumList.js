import React from 'react';
import { View, Text } from 'react-native';
import AlbumDetail from './AlbumDetail';

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

  renderAlbums(){
    return this.state.albums.map((album) => {
      console.log(album, 'album');
      return <AlbumDetail key={album.title} details={album} />
    })
  }

  render(){

    return (
      <View>
        {this.renderAlbums()}
      </View>
    )
  }
}

export default AlbumList;
