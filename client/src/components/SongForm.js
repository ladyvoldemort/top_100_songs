import React from 'react';

class SongForm extends React.Component{
  state = { title: '', artist:'', genre:''}

  handleChange = (e) => {
    this.setState({ title: e.target.value, artist: e.target.value, genre: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addSong(this.state.title, this.state.artist, this.state.genre);
    this.setState({ title:'', artist:'', genre:''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Song Title"
          required
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          placeholder="Artist"
          required
          value={this.state.artist}
          onChange={this.handleChange}
        />
        <input
          placeholder="Genre"
          required
          value={this.state.genre}
          onChange={this.handleChange}
        />

      </form>  
    )
  }
}
export default SongForm;