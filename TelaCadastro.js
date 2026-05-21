import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { autenticacao } from '../config/firebaseConfig';

export default function TelaCadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const fazerCadastro = async () => {
    try {
      const usuarioCriado = await createUserWithEmailAndPassword(autenticacao, email, senha);

      // Salvar o nome do usuário no displayName
      await updateProfile(usuarioCriado.user, {
        displayName: nome
      });

      navigation.navigate('Login');
    } catch (erro) {
      setErro('Erro ao cadastrar. Tente novamente.');
    }
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Crie sua conta</Text>

      <Text style={estilos.label}>Nome</Text>
      <TextInput
        style={estilos.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Seu nome"
      />

      <Text style={estilos.label}>Email</Text>
      <TextInput
        style={estilos.input}
        value={email}
        onChangeText={setEmail}
        placeholder="seu@email.com"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={estilos.label}>Senha</Text>
      <TextInput
        style={estilos.input}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        placeholder="Digite uma senha"
      />

      <TouchableOpacity style={estilos.botao} onPress={fazerCadastro}>
        <Text style={estilos.textoBotao}>Cadastrar</Text>
      </TouchableOpacity>

      {erro ? <Text style={estilos.erro}>{erro}</Text> : null}
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
  titulo: { fontSize: 26, fontWeight: '700', marginBottom: 20, color: '#213547' },
  label: { alignSelf: 'flex-start', marginLeft: '5%', marginBottom: 6, color: '#34495e' },
  input: {
    width: '90%',
    maxWidth: 420,
    borderWidth: 1,
    borderColor: '#dbe6ff',
    backgroundColor: '#fff',
    marginBottom: 12,
    padding: 12,
    borderRadius: 8,
  },
  botao: {
    width: '90%',
    maxWidth: 420,
    backgroundColor: '#3b82f6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 6,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  textoBotao: { color: '#fff', fontWeight: '600' },
  erro: { color: 'red', marginTop: 10 },
});