// If you're running on a device or in the Android simulator be sure to change
let METEOR_URL = 'http://localhost:3000/websocket';
if (process.env.NODE_ENV === 'production') {
  METEOR_URL = ''; // your production server url
}

// define config object with 2 properties.
const config = {
  env: process.env.NODE_ENV,
  METEOR_URL,
};

/*
Export the config object so that it can be imported elsewhere with...
import config from './config';
*/
export default config;
