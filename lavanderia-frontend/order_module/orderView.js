import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import api from '../api';

export default function OrderView() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get('/orders')
      .then(res => setOrders(res.data))
      .catch(err => console.error(err));
  }, []);

  const renderOrderDetails = (details) => {
    return details.map((detail, index) => (
      <View key={index} style={styles.detailRow}>
        <Text style={styles.detailText}>
          • Prenda: <Text style={styles.detailHighlight}>{detail.garment}</Text>, 
          Servicio: <Text style={styles.detailHighlight}>{detail.service}</Text>, 
          Precio: <Text style={styles.detailHighlight}>${detail.price.toFixed(2)}</Text>
        </Text>
      </View>
    ));
  };

  const renderItem = ({ item }) => {
    const total = item.details.reduce((sum, detail) => sum + detail.price, 0);

    return (
      <View style={styles.card}>
        <Text style={styles.title}>Cliente: {item.client_name}</Text>
        <Text style={styles.subtitle}>Resumen de la orden:</Text>
        {renderOrderDetails(item.details)}
        <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
        <Text style={styles.status}>Estado: {item.status}</Text>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Resumen de Órdenes</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    backgroundColor: '#946dd3',
  },
  header: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 12, 
    textAlign: 'center',
    color: 'black',
  },
  card: {
    backgroundColor: '#f5f0e6', 
    padding: 16,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  title: { 
    fontWeight: 'bold', 
    fontSize: 18, 
    marginBottom: 8,
    color: '#5b3a29', 
  },
  subtitle: { 
    fontWeight: '600', 
    marginBottom: 6, 
    fontSize: 16,
    color: '#5b3a29',
  },
  detailRow: { 
    marginBottom: 4 
  },
  detailText: { 
    fontSize: 15, 
    color: '#5b3a29',
  },
  detailHighlight: { 
    fontWeight: 'bold', 
    color: '#3e2f22', 
  },
  total: { 
    marginTop: 10, 
    fontWeight: 'bold', 
    fontSize: 16,
    color: '#5b3a29',
  },
  status: { 
    marginTop: 6, 
    fontSize: 14, 
    fontStyle: 'italic', 
    color: '#7d6e65',
  },
});
