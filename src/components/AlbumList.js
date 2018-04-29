import React from 'react';
import { ScrollView, Text } from 'react-native';
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
      return <AlbumDetail key={album.title} details={album} />
    })
  }

  render(){

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    )
  }
}

export default AlbumList;
