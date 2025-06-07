import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import axios from 'axios';
import { API_URL } from '../../config/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [clave, setClave] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${API_URL}/login`, {
        correo: email,
        clave: clave,
      });
      Alert.alert('Login exitoso', `Token: ${res.data.token}`);
    } catch (err) {
      Alert.alert('Error', 'Credenciales inválidas');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Iniciar Sesión</Text>
      <TextInput placeholder="Correo" value={email} onChangeText={setEmail} style={{ borderWidth: 1, marginVertical: 10, padding: 8 }} />
      <TextInput placeholder="Contraseña" value={clave} onChangeText={setClave} secureTextEntry style={{ borderWidth: 1, marginBottom: 10, padding: 8 }} />
      <Button title="Ingresar" onPress={handleLogin} />
    </View>
  );
}