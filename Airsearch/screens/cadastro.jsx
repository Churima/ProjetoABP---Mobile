import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';

const Cadastro = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Air Search</Text>

      <View style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          label="Nome"
          value={nome}
          onChangeText={setNome}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="Usuário"
          value={usuario}
          onChangeText={setUsuario}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
          style={styles.input}
        />
      </View>

      <Button mode="contained" labelStyle={{ color: 'white' }} onPress={handleCadastro} style={styles.button}>
        CADASTRAR
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
  header: {
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
  }
});

export default Cadastro;
