import React from 'react';
import { ScrollView } from 'react-native';
import Login from './views/auth/Login';
import CreateUserView from './views/users/CreateUserView';
import CreateClientView from './views/clients/CreateClientView';
import UpdateClientView from './views/clients/UpdateClientView';

export default function App() {
  return (
    <ScrollView>
      <Login />
      <CreateUserView />
      <CreateClientView />
      <UpdateClientView />
    </ScrollView>
  );
}