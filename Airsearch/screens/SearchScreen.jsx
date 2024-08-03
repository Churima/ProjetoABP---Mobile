import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';
import FlightCard from '../components/FlightCard';

const SearchScreen = () => {
  const [place_origin, set_place_origin] = useState('');
  const [place_destiny, set_place_destiny] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const generateRandomFlights = (origin, destiny) => {
    const airlines = ['LATAM', 'GOL', 'Air France', 'United', 'Delta'];
    const randomFlights = [];

    for (let i = 0; i < 5; i++) {
      const randomAirline = airlines[Math.floor(Math.random() * airlines.length)];
      const randomEconomyPrice = `R$${(Math.random() * (3000 - 1000) + 1000).toFixed(2)}`;
      const randomFirstClassPrice = `R$${(Math.random() * (7000 - 4000) + 4000).toFixed(2)}`;
      randomFlights.push({
        key: `${i}`,
        airline: randomAirline,
        routes: `${origin} ~ ${destiny}`,
        economy: randomEconomyPrice,
        firstClass: randomFirstClassPrice,
      });
    }

    return randomFlights;
  };

  const handleSearch = () => {
    console.log('Input 1:', place_origin);
    console.log('Input 2:', place_destiny);
    const results = generateRandomFlights(place_origin, place_destiny);
    setSearchResults(results);
  };

  const handleRemoveCard = (key) => {
    setSearchResults(prevResults => prevResults.filter(item => item.key !== key));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
      <Button
        mode="contained"
        labelStyle={{ color: 'white' }}
        onPress={handleSearch}
        style={styles.button}
      >
        Pesquisar
      </Button>
      <ScrollView style={styles.card_container}>
        {searchResults.map((flight, index) => (
          <FlightCard
            key={index}
            airline={flight.airline}
            routes={flight.routes}
            economy={flight.economy}
            firstClass={flight.firstClass}
            onRemove={() => handleRemoveCard(flight.key)}
          />
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 20,
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
  card_container: {
    width: '100%',
    marginTop: 20,
  }
});

export default SearchScreen;
