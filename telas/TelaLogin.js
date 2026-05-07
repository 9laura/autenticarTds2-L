import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { autenticacao } from '../config/firebaseConfig';
import { Ionicons } from '@expo/vector-icons';

export default function TelaLogin({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const fazerLogin = async () => {
    if (!email || !senha) {
      setErro('Preencha todos os campos.');
      return;
    }
    try {
      await signInWithEmailAndPassword(autenticacao, email, senha);
      setErro('');
    } catch (erro) {
      setErro('Erro ao fazer login. Verifique seus dados.');
    }
  };

  return (
    <View style={estilos.container}>
      <View style={estilos.form}>
        <Text style={estilos.title}>Login</Text>
        <View style={estilos.inputContainer}>
          <Ionicons name="mail" size={20} color="#666" style={estilos.icon} />
          <TextInput
            style={estilos.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={estilos.inputContainer}>
          <Ionicons name="lock-closed" size={20} color="#666" style={estilos.icon} />
          <TextInput
            style={estilos.input}
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />
        </View>
        {erro ? <Text style={estilos.erro}>{erro}</Text> : null}
        <TouchableOpacity style={estilos.button} onPress={fazerLogin}>
          <Text style={estilos.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.link} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={estilos.linkText}>Não tem conta? Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  form: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fafafa',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
  },
  erro: {
    color: '#e74c3c',
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    alignItems: 'center',
  },
  linkText: {
    color: '#3498db',
    fontSize: 16,
  },
});