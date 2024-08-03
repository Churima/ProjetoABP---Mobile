import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';

const SearchScreen = () => {
  const [place_origin, set_place_origin] = useState('');
  const [place_destiny, set_place_destiny] = useState('');

  const handleSearch = () => {
    console.log('Input 1:', place_origin);
    console.log('Input 2:', place_destiny);
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Pesquisar</Title>

      <View style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          label="Onde mora"
          value={place_origin}
          onChangeText={text => set_place_origin(text)}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="Onde quer ir?"
          value={place_destiny}
          onChangeText={text => set_place_destiny(text)}
          style={styles.input}
        />
      </View>
      <Button mode="contained" labelStyle={{ color: 'white' }}  onPress={handleSearch} style={styles.button}>
        Pesquisar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#003366',
    width: '100%',
    textAlign: 'center',
    padding: 15,
  },
  inputContainer: {
    width: '80%',
    marginTop: 20,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    width: '80%',
    marginTop: 20,
    backgroundColor: '#003366',
  },
});

export default SearchScreen;