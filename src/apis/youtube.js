import axios from 'axios';

const KEY = 'AIzaSyDY5RT-1EifrPcTzCP1Mu2kwyAB1VrHvzQ';

export default axios.create({
  baseURl: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
