import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Title, IconButton } from 'react-native-paper';

const FlightCard = ({ airline, routes, economy, firstClass, onRemove }) => (
  <Card style={styles.card}>
    <Card.Content>
      <View style={styles.header}>
        <Title>{airline}</Title>
        <IconButton
          icon="close"
          size={20}
          onPress={onRemove}
        />
      </View>
      <Text>{routes}</Text>
      <View style={styles.priceContainer}>
        <View style={styles.priceItem}>
          <Text style={styles.label}>Econômica</Text>
          <Text style={styles.price}>{economy}</Text>
        </View>
        <View style={styles.priceItem}>
          <Text style={styles.label}>Primeira Classe</Text>
          <Text style={styles.price}>{firstClass}</Text>
        </View>
      </View>
    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  priceItem: {
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    color: '#888',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FlightCard;
