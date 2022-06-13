import React, {useState} from 'react';
import {Text, 
    SafeAreaView, 
    TouchableOpacity,
    StyleSheet, 
} from 'react-native';
const numbTotal = 100;
const App = () => {

  const [numero, setNumb] = useState(0)

  function handle_number(){

    const novoNumero = Math.floor(Math.random()*numbTotal)

    setNumb(novoNumero);

  }

  return (
        <SafeAreaView style={style.container}>
        <Text style={style.numero}>{numero}</Text>
        <Text style={style.textNum}>Gere número aleatório de 0 a {numbTotal}!</Text>
        <TouchableOpacity onPress={handle_number} style={style.botao}>
            <Text style={style.textNum}>GERAR</Text>
        </TouchableOpacity>
        </SafeAreaView>
    
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#FF0000',
        fontSize: 42,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    numero: {
      fontSize: 42,
      color: '#FFFFFF',
    },    
    textNum: {
      fontSize: 23,       
     fontWeight: 'bold',
     alignItems: 'center',
    },
    botao: {
      backgroundColor: '#FFF',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      width: '50%',
      paddingHorizontal: 15,
      paddingVertical:15,
      borderRadius: 10,
      marginTop: 10,
    }
});

export default App;