/*
THE ENTRY POINT OF THE APP
This is what the default index.ios.js and index.android.js will call.
It handles initializing our Meteor connection and determining which layout should be shown.
*/
/*
If you're unfamiliar with imports they are a new feature of the ES6 version of JS.
It helps make our apps more modular.
At first importing things may seem like a nuisance but as the app grows larger it becomes
MUCH easier to maintian a modular app.
*/
import React from 'react';
import Meteor, { createContainer } from 'react-native-meteor';

/*
The below items are defined in our app.
LoggedOut is imported from ./layouts/LoggedOut (notice that we don't need to put .js at the end.)
*/
import LoggedOut from './layouts/LoggedOut';
import LoggedIn from './layouts/LoggedIn';
import Loading from './components/Loading';
import config from './config';


/*
Connect with the meteor server using the config defined in /config.js
METEOR_URL is a constant defined in config.
*/
Meteor.connect(config.METEOR_URL);

/*
Declare RNApp constant with passed in props object.
This takes data (props) and decides what to do. - our logic.
*/
const RNApp = (props) => {
  // Deconstruct the props object into it's constituents, status, user & loggingIn.
  const { status, user, loggingIn } = props;

  /*
  Set the layout based on the status of the user.
  A layout is the overall presentation of the app.
  When no-one is logged in the app presents a basic 'blank' screen.
  */
  if (status.connected === false || loggingIn) {
    return <Loading />; // A component that displays a loading spinner.
  } else if (user !== null) {
    return <LoggedIn />;
  } else {
    return <LoggedOut />;
  }
}; // Close the RNApp obj.

/*
Define the propTypes (property types) for RNApp.
These are what are deconstructed in the code above.
Defining the types means we can be certain of the props that can be passed.
It means we can't have ambiguous props passed to RNApp.
*/
RNApp.propTypes = {
  status: React.PropTypes.object,
  user: React.PropTypes.object,
  loggingIn: React.PropTypes.bool,
};

/*
createContainer is how we get meteor data (since Meteor 1.3)
Previously meteor data was grabbed using the @connectMeteor decorator & getMeteorData() method.
This new way of using containers makes it easier to separate the data from presentation.
(Separation of concerns).
This makes it easier to change how we source the data in the future.
The container also 'shapes' the data to suit our propTypes that we defined above.

I imagine createContainer as a wrapper that sources and shapes the data before
passing it to RNApp as props.
RNApp then decides what to do based on the prop values.
*/
export default createContainer(() => {
  return {
    status: Meteor.status(),
    user: Meteor.user(),
    loggingIn: Meteor.loggingIn(),
  };
}, RNApp); // RNApp being called - how createContainer & RNApp are connected.

/*
Now go to ./layouts/LoggedOut.js. We'll go down the rabbit hole a bit
*/
