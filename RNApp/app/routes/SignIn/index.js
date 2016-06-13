import SignInContainer from './SignInContainer';
import SignIn from './SignIn';

/*
This is the other way that we can export things.
We import SignIn in LoggedOutLayout.js with...
import SignIn from '../routes/SignIn';

Note that ../routes/SignIn is a folder, not a .js file.
This index.js file makes it possible to import stuff from a 'folder'

Here we are exporting 2 things, SignIn & SignInContainer
*/

export { SignIn };
export default SignInContainer;

/*
Now go to SignIn.js
*/
