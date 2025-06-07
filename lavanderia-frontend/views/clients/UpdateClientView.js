import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';
import { API_URL } from '../../config/api';

export default function UpdateClientView() {
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');

  const handleUpdate = async () => {
    try {
      const res = await axios.put(`${API_URL}/clientes/${id}`, { nombre });
      Alert.alert('Cliente actualizado', res.data.message || 'OK');
    } catch (err) {
      Alert.alert('Error', 'No se pudo actualizar cliente');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Actualizar Cliente</Text>
      <TextInput placeholder="ID Cliente" value={id} onChangeText={setId} style={{ borderWidth: 1, marginVertical: 10, padding: 8 }} />
      <TextInput placeholder="Nuevo Nombre" value={nombre} onChangeText={setNombre} style={{ borderWidth: 1, marginBottom: 10, padding: 8 }} />
      <Button title="Actualizar" onPress={handleUpdate} />
    </View>
  );
}