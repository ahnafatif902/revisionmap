import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { supabase } from './supabase';

export default function App() {
  const [status, setStatus] = useState('Connecting...');

  useEffect(() => {
    supabase
      .from('subjects')
      .select('*')
      .then(({ error }) => {
        if (error) setStatus('Error: ' + error.message);
        else setStatus('Connected! Tables ready.');
      });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{status}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
