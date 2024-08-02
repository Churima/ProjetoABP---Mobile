import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';

const Login = ({ navigation }) => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação
    // Navegue para a tela principal após o login
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Air Search</Text>

      <View style={styles.inputContainer}>
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

      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        CONECTAR
      </Button>

      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} style={styles.link}>
        <Text style={styles.linkText}>Não tem uma conta? clique aqui.</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
  },
  link: {
    marginTop: 20,
  },
  linkText: {
    color: '#003366',
    textDecorationLine: 'underline',
  },
});

export default Login;
