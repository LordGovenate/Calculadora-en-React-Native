import { StyleSheet, Text, View,TextInput ,TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.title}>Calculadora de Kevin y Josue</Text>
  
      </View>
      <View>
        <TouchableOpacity style={{backgroundColor: 'blue', padding: 10, borderRadius: 5}}  >
          <Text style={{color: 'white', fontSize: 18}}>Botón de ejemplo</Text>
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
});
