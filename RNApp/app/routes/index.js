import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import Home from './Home';
import Details from './Details';
import Profile, { Icon as userIcon } from './Profile';
import Settings, { Icon as settingsIcon } from './Settings';

const styles = StyleSheet.create({
  leftIcon: {
    height: 30,
    width: 30,
    tintColor: '#929292',
    marginLeft: 10,
    marginTop: 5,
  },
  rightIcon: {
    height: 30,
    width: 30,
    tintColor: '#929292',
    marginRight: 10,
    marginTop: 5,
  },
  iconSelected: {
    tintColor: 'rgb(0, 122, 255)',
  },
});

const Routes = {
  getHomeRoute() {
    return {
      renderScene(navigator) {
        return <Home navigator={navigator} />;
      },

      getTitle() {
        return 'Home';
      },

      renderLeftButton(navigator) {
        return (
          <TouchableOpacity onPress={() => {
            navigator.push(Routes.getProfileRoute());
          }}
          >
            <Image
              style={styles.leftIcon}
              source={userIcon}
            />
          </TouchableOpacity>
        );
      },
      renderRightButton(navigator) {
        return (
          <TouchableOpacity onPress={() => {
            navigator.push(Routes.getSettingsRoute());
          }}
          >
            <Image
              style={styles.rightIcon}
              source={settingsIcon}
            />
          </TouchableOpacity>
        );
      },
    };
  },
  getSettingsRoute() {
    return {
      renderScene(navigator) {
        return <Settings navigator={navigator} />;
      },

      getTitle() {
        return 'Settings';
      },
    };
  },
  getDetailsRoute() {
    return {
      renderScene(navigator) {
        return <Details navigator={navigator} />;
      },

      getTitle() {
        return 'Details';
      },
    };
  },
  getProfileRoute() {
    return {
      renderScene(navigator) {
        return <Profile navigator={navigator} />;
      },

      showNavigationBar: false,
    };
  },
};

export default Routes;
