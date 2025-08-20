import { StyleSheet, Text, View,TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
<Text style={styles.title}>Calculadora de Kevin y Josue</Text>
  
      </View>
      
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
