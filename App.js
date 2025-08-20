import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState('');

  const handleSumar = () => {
    setResultado((parseFloat(num1) || 0) + (parseFloat(num2) || 0));
  };

  const handleRestar = () => {
    setResultado((parseFloat(num1) || 0) - (parseFloat(num2) || 0));
  };

  const handleMultiplicar = () => {
    setResultado((parseFloat(num1) || 0) * (parseFloat(num2) || 0));
  };

  const handleDividir = () => {
    if ((parseFloat(num2) || 0) === 0) {
      setResultado('Error');
    } else {
      setResultado((parseFloat(num1) || 0) / (parseFloat(num2) || 0));
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Calculadora de Kevin y Josue</Text>
      </View>
      <TextInput
        placeholder="Ingrese un número"
        keyboardType="numeric"
        placeholderTextColor="#9aa0a6"
        style={styles.input}
        value={num1}
        onChangeText={setNum1}
      />
      <TextInput
        placeholder="Ingrese un número"
        keyboardType="numeric"
        placeholderTextColor="#9aa0a6"
        style={styles.input}
        value={num2}
        onChangeText={setNum2}
      />
      <View style={styles.botones}>
        <TouchableOpacity style={styles.button} onPress={handleSumar}>
          <Text style={styles.text}>Sumar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleRestar}>
          <Text style={styles.text}>Restar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleMultiplicar}>
          <Text style={styles.text}>Multiplicar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleDividir}>
          <Text style={styles.text}>Dividir</Text>
        </TouchableOpacity>
      </View>
       <Text style={styles.title}>Resultado</Text>
      <TextInput
        placeholder="Resultados"
        keyboardType="numeric"
        placeholderTextColor="#9aa0a6"
        style={styles.inputResult}
        editable={false}
        value={resultado.toString()}
      />
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
  button: {
    backgroundColor: '#1a73e8',
    padding: 10,
    borderRadius: 5
  },

  botones: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 40,
    marginTop: 10,
    paddingHorizontal: 10,
    color: 'white',
    width: '90%',
    borderRadius: 12,
  },
  inputResult: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 30,
    paddingHorizontal: 10,
    color: 'white',
    width: '80%',
    borderRadius: 12,
  },
});
