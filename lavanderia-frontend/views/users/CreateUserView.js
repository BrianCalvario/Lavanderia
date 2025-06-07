import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';
import { API_URL } from '../../config/api';

export default function CreateUserView() {
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');

  const handleCreate = async () => {
    try {
      const res = await axios.post(`${API_URL}/usuarios`, {
        correo,
        clave,
      });
      Alert.alert('Usuario creado', res.data.message || 'OK');
    } catch (err) {
      Alert.alert('Error', 'No se pudo crear usuario');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Crear Usuario</Text>
      <TextInput placeholder="Correo" value={correo} onChangeText={setCorreo} style={{ borderWidth: 1, marginVertical: 10, padding: 8 }} />
      <TextInput placeholder="Clave" value={clave} onChangeText={setClave} secureTextEntry style={{ borderWidth: 1, marginBottom: 10, padding: 8 }} />
      <Button title="Crear Usuario" onPress={handleCreate} />
    </View>
  );
}