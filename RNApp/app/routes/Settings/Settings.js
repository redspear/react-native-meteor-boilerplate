import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  main: {
    fontSize: 20,
    textAlign: 'center',
    color: COLORS.headerText,
    fontWeight: '400',
    fontStyle: 'italic',
  },
});

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.main}>
        Settings
      </Text>
    </View>
  );
};

export default Settings;
