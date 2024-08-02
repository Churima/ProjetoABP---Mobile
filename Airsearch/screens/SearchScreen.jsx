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
      <TextInput
        label="Onde mora?"
        value={place_origin}
        onChangeText={text => set_place_origin(text)}
        style={styles.input}
      />
      <TextInput
        label="Onde quer ir?"
        value={place_destiny}
        onChangeText={text => set_place_destiny(text)}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleSearch} style={styles.button}>
        Pesquisar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});

export default SearchScreen;