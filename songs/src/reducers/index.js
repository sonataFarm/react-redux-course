import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Smells Like Teen Spirit', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All Star', duration: '4:45' },
    { title: 'I Want it That Way', duration: '1:45' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
    return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
