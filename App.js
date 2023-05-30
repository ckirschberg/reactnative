import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';
import List from './components/list'

export default function App() {
  const [text, onChangeText] = useState('Useless Text');

  const handleButtonPress = () => {
    alert('Test button press')
  }

  return (
    // Components, eg. TextInput
    // https://reactnative.dev/docs/textinput
    // FlexBox: https://reactnative.dev/docs/flexbox
    <View style={styles.container}>
      <Text>Hej Aleander</Text>
      <List></List>

      {/* <Text>Text example. Print something out on the screen with the Text component</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button
        title="Press me"
        color="#f194ff"
        onPress={handleButtonPress}
      /> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%'
  },
});
