import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { signOut } from 'firebase/auth';
import { autenticacao } from '../config/firebaseConfig';
import { Ionicons } from '@expo/vector-icons';

export default function TelaHome() {
  const fazerLogout = () => {
    signOut(autenticacao);
  };

  return (
    <View style={estilos.container}>
      <View style={estilos.card}>
        <Ionicons name="home" size={60} color="#3498db" style={estilos.icon} />
        <Text style={estilos.welcome}>Bem-vindo!</Text>
        <Text style={estilos.email}>{autenticacao.currentUser?.email}</Text>
        <TouchableOpacity style={estilos.button} onPress={fazerLogout}>
          <Ionicons name="log-out" size={20} color="#fff" style={estilos.buttonIcon} />
          <Text style={estilos.buttonText}>Sair</Text>
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
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#fff',
    padding: 40,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  icon: {
    marginBottom: 20,
  },
  welcome: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e74c3c',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});