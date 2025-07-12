import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native';
import { useState } from 'react';
import { API_URL } from './api';

export default function CreateUser({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    if (!name || !email || !password) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }

    try {
      const response = await fetch(`${API_URL}/users/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Usuario registrado correctamente');
        navigation.navigate('Login');
      } else {
        Alert.alert('Error', data.error || 'Algo salió mal');
      }
    } catch (error) {
      Alert.alert('Error', 'No se pudo conectar con el servidor');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrate</Text>

      <Text style={styles.label}>Nombre</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Correo</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <View style={styles.centeredButton}>
        <Pressable style={styles.button} onPress={handleRegister}>
          <Text style={styles.textButton}>Registrarse</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textReg}>Iniciar sesión</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#946dd3', // Fondo morado consistente
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'black',
  },

  label: {
    fontSize: 20,
    color: 'black',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },

  input: {
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'white',
    fontSize: 15,
    width: '100%',
    borderRadius: 10,
    padding: 8,
    marginBottom: 15,
  },

  centeredButton: {
    alignItems: 'center',
    marginTop: 15,
    width: '100%',
  },

  button: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    width: '100%',
  },

  textButton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },

  textReg: {
    marginTop: 10,
    fontSize: 15,
    color: 'black',
    textDecorationLine: 'underline',
    textAlign: 'center',
    width: '100%',
  },
});
