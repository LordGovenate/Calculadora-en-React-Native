import { StyleSheet, Text, View,TextInput ,TouchableOpacity, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.title}>Calculadora de Kevin y Josue</Text>
  
      </View>
      <View style={styles.botones}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Sumar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Restar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Multiplicar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Dividir</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
button:
{
  backgroundColor: 'blue', 
  padding: 10, 
  borderRadius: 5},

  botones: {
    flexDirection: 'row',
    gap: 10,
  }
});
