import React from 'react';
import SignIn from '../routes/SignIn';

/*
This is the LoggedOutLayout constant that is imported in app/index.js
It's a var (or const in ES6) that returns a function.
In this case the function returns the <SignIn /> component.
This component is defined in ../routes/SignIn.js
*/
const LoggedOutLayout = () => {
  return <SignIn />;
};

/*
This line exports the LoggedOutLayout const (obviously).
This makes it possible to import LoggedOutLayout from other parts of the app.
This isn't the only way to export stuff. The SignIn component shows another
way that stuff can be exported.
*/
export default LoggedOutLayout;

/*
Now go to ../routes/SignIn/index.js
*/
