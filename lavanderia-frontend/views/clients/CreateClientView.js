import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';
import { API_URL } from '../../config/api';

export default function CreateClientView() {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');

  const handleCreate = async () => {
    try {
      const res = await axios.post(`${API_URL}/clientes`, {
        nombre,
        telefono,
        direccion,
      });
      Alert.alert('Cliente creado', res.data.message || 'OK');
    } catch (err) {
      Alert.alert('Error', 'No se pudo crear cliente');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Crear Cliente</Text>
      <TextInput placeholder="Nombre" value={nombre} onChangeText={setNombre} style={{ borderWidth: 1, marginVertical: 10, padding: 8 }} />
      <TextInput placeholder="Teléfono" value={telefono} onChangeText={setTelefono} style={{ borderWidth: 1, marginBottom: 10, padding: 8 }} />
      <TextInput placeholder="Dirección" value={direccion} onChangeText={setDireccion} style={{ borderWidth: 1, marginBottom: 10, padding: 8 }} />
      <Button title="Guardar" onPress={handleCreate} />
    </View>
  );
}