import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {shouldUseActivityState} from 'react-native-screens';
import styled from 'styled-components';

// Composant Card
const Popular = props => {
  return (
    <View style={styles.popular}>
      <Text> {props.title} </Text>
    </View>
  );
};

//////////////

// à faire avec styled-component
const calculId = props => {
  if (props.id % 2 == 0) {
    return "'red'";
  } else {
    return "'blue'";
  }
};

// CSS

// const ViewStyled = styled.View`

// `
// }
const styles = StyleSheet.create({
  popular: {
    padding: 10,
    margin: 2,
    borderWidth: 1,
  },
});

export default Popular;
