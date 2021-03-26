import React from 'react';
import { StyleSheet, } from 'react-native';
import Dashboard from './app/screens/Dashboard';

export default function App() {
  return <Dashboard />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});