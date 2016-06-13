/*
This is the pure (sometimes called dumb) part of the component that displays stuff
based on the props passed to it.
It's counterpart the SignInContainer is the smart part that handles most of the logic and data sync.
*/

import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Button from '../../components/Button';
import GenericTextInput, { InputWrapper } from '../../components/GenericTextInput';
import { COLORS } from '../../styles';
import Logo from '../../images/rn-logo.png';

// Get the dimensions of the window. Dimensions is provided by 'react-native'
const window = Dimensions.get('window');

/*
Styles are like css files.
Property names are similar but in camel case.
So it's backgroundColor instead of background-color in css.
Not all css properties are available. We only have a subset of css properties.

FLEX BOX
The flex property might be new to you.
It lets us position items on a page.
It means we don't (or rarely?) use floats.
Check out the flex box webpage for more info.
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  buttons: {
    flexDirection: 'row',
  },
  error: {
    height: 28,
    justifyContent: 'center',
    width: window.width,
    alignItems: 'center',
  },
  errorText: {
    color: COLORS.errorText,
    fontSize: 14,
  },
  header: {
    marginBottom: 25,
    alignItems: 'center',
  },
  logo: {
    width: 125,
    height: 125,
  },
  headerText: {
    fontSize: 30,
    color: COLORS.headerText,
    fontWeight: '600',
    fontStyle: 'italic',
  },
  subHeaderText: {
    fontSize: 20,
    color: COLORS.headerText,
    fontWeight: '400',
    fontStyle: 'italic',
  },
});

/*
Define a SignIn component and pass it a props object.
The props object is defined with SignIn.propTypes near the end of the file.
This defines what props can be used and are expected by the SignIn component.
*/
const SignIn = (props) => {
  /*
  Deconstruct the props object into it's individual properties.
  All of these properties can now be called by name as const's
  */
  const { updateState, signIn, error, confirmPasswordVisible } = props;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={Logo}
        />

        <Text style={styles.headerText}>React Native Meteor</Text>
        <Text style={styles.subHeaderText}>Boilerplate</Text>
      </View>

      <InputWrapper>
        <GenericTextInput
          placeholder="email address"
          onChangeText={(email) => updateState({ email })}
        />
        <GenericTextInput
          placeholder="password"
          onChangeText={(password) => updateState({ password })}
          secureTextEntry
          borderTop
        />
        {confirmPasswordVisible ?
          <GenericTextInput
            placeholder="confirm password"
            onChangeText={(confirmPassword) => updateState({ confirmPassword })}
            secureTextEntry
            borderTop
          />
        : null}
      </InputWrapper>

      <View style={styles.error}>
        <Text style={styles.errorText}>{error}</Text>
      </View>

      <View style={styles.buttons}>
        <Button text="Sign In" onPress={signIn} />
      </View>

      <KeyboardSpacer />
    </View>
  );
};

// This defines what props can be used and are expected by the SignIn component.
SignIn.propTypes = {
  updateState: React.PropTypes.func,
  signIn: React.PropTypes.func,
  error: React.PropTypes.string,
  confirmPasswordVisible: React.PropTypes.bool,
};

export default SignIn;

// Now go to SignInContainer.js
