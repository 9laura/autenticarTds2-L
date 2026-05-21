import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { signOut } from 'firebase/auth';
import { autenticacao } from '../config/firebaseConfig';

export default function TelaHome() {
  const fazerLogout = () => {
    signOut(autenticacao);
  };

  const nomeUsuario = autenticacao.currentUser?.displayName
    || 'Usuário';

  const emailUsuario = autenticacao.currentUser?.email || '';

  return (
    <View style={estilos.container}>
      <View style={estilos.card}>
        <Text style={estilos.titulo}>Bem-vindo,</Text>
        <Text style={estilos.nome}>{nomeUsuario}!</Text>
        <TouchableOpacity style={estilos.botaoSair} onPress={fazerLogout}>
        <Text style={estilos.textoBotao}>Sair</Text>
      </TouchableOpacity>
      </View>

      
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f7ff',
  },
  card: {
    width: '90%',
    maxWidth: 520,
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 20,
  },
  titulo: { fontSize: 18, color: '#6b7280' },
  nome: { fontSize: 28, fontWeight: '700', color: '#1f2937', marginTop: 4 },
  email: { fontSize: 14, color: '#64748b', marginTop: 8 },
  botaoSair: {
    backgroundColor: '#ef4444',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
  },
  botaoSair: {
    backgroundColor: '#ef4444',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  textoBotao: { color: '#fff', fontWeight: '600' },
});