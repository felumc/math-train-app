import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import React from 'react';
import { StyleSheet, Text, SafeAreaView , Switch } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { myColors } from '../styles/myColors';
import MyKeyboard from '../components/MyKeyboard';

const generateRandomNumber = () => {
    return Math.floor(Math.random() * 9) + 1;
  };

const MultiplicacionesScreen: React.FC<any> = ({navigation}) => {
    const [theme, setTheme] = useState('light');
    const [num1, setNum1] = useState(generateRandomNumber());
    const [num2, setNum2] = useState(generateRandomNumber());

    React.useLayoutEffect(() => {
        navigation.setOptions({
        headerShown: false, // Hide the header
        });
    }, [navigation]);

    

    const handleAlert = () => {
        // Update the random numbers when the alert is displayed
        setNum1(generateRandomNumber());
        setNum2(generateRandomNumber());
    };

    return (
    <ThemeContext.Provider value={theme}>
    <SafeAreaView style={theme === "light" ? styles.container : [styles.container, {backgroundColor: "black"}]}>
      <StatusBar style="auto" />
      <Switch value={theme === "light"} onValueChange={() => setTheme(theme === "light" ? "dark": "light")}/>
      <Text style={[styles.title, theme === "light" ? {color: myColors.black} : {color: myColors.white}]}>Multiplicaciones ✍️</Text>
      <Text style={[styles.subtitle, theme === "light" ? {color: myColors.black} : {color: myColors.white}]}>Resuelve:</Text>
      <Text style={[styles.title, theme === "light" ? {color: myColors.black} : {color: myColors.white}]}>{num1} * {num2}</Text>
      <MyKeyboard result={num1 * num2} onAlert={handleAlert} />

    </SafeAreaView>
    </ThemeContext.Provider>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: myColors.light,
      alignItems: 'center',
      justifyContent: 'flex-start',
      
    },
    title: {
      fontSize: 30, // Adjust this value to your desired size
      fontWeight: 'bold',
      marginTop: 20,
      // Add any other styles you need, like color, fontFamily, etc.
    },
    subtitle: {
      fontSize: 20, // Adjust this value to your desired size
      fontWeight: 'bold',
      marginTop: 20,
      // Add any other styles you need, like color, fontFamily, etc.
    },
  });

export default MultiplicacionesScreen;