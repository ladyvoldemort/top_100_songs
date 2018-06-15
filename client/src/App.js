import React, { Component } from 'react';
import SongForm from './components/SongForm';
import SongList from './components/SongList';

class App extends Component {
  state = { songs: [] }
  
  componentDidMount() {
    //TODO make a call to our rails server to get Songs-- FAKER
  }

  addSong = (title, artist, genre) => {
    //TODO make api call to rails server to add item
    //TODO update state
  }

  updateSong = (id) => {
    //TODO make api call to update todo
    //TODO upadte state
  }

  deleteSong = (id) => {
    //TODO make api call to delete song
    //TODO remove it from state
  }

  render() {
    return (
      <div className="App">
        <SongForm addSong={this.addSong} />
        <SongList
          songs={this.state.songs}
          updateSong={this.updateSong}
          deleteSong={this.deleteSong}
        />
      </div>
    );
  }
}

export default App;
