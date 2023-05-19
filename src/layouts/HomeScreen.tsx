import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import React from 'react';
import { StyleSheet, Text, SafeAreaView , Switch } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import MainButton from '../components/MainButton';
import { myColors } from '../styles/myColors';

const HomeScreen: React.FC<any> = ({navigation}) => {
const [theme , setTheme] = useState("light")

React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // Hide the header
    });
    }, [navigation]);

    const goToSumasScreen = () => {
    navigation.navigate('Sumas');
    };

    const goToRestasScreen = () => {
    navigation.navigate('Restas');
    };

    const goToMultiplicacionesScreen = () => {
    navigation.navigate('Multiplicaciones');
    };

    const goToDivisionesScreen = () => {
        navigation.navigate('Divisiones');
    };

  return (
    <ThemeContext.Provider value={theme}>
    <SafeAreaView style={theme === "light" ? styles.container : [styles.container, {backgroundColor: "black"}]}>
      <StatusBar style="auto" />
      <Switch value={theme === "light"} onValueChange={() => setTheme(theme === "light" ? "dark": "light")}/>
      <Text style={[styles.title, theme === "light" ? {color: myColors.black} : {color: myColors.white}]}>Math Train 👨‍🏫</Text>
      <Text style={[styles.subtitle, theme === "light" ? {color: myColors.black} : {color: myColors.white}]}>Por Luis Morales</Text>
      <Text style={[styles.subtitle, theme === "light" ? {color: myColors.black} : {color: myColors.white}]}>¿Qué operación quieres practicar hoy?</Text>
      <MainButton title="Sumas" onPress={goToSumasScreen}/>
      <MainButton title="Restas" onPress={goToRestasScreen}/>
      <MainButton title="Multiplicaciones " onPress={goToMultiplicacionesScreen}/>
      <MainButton title="Divisiones" onPress={goToDivisionesScreen}/>
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
      fontSize: 15, // Adjust this value to your desired size
      fontWeight: 'bold',
      marginTop: 10,
      // Add any other styles you need, like color, fontFamily, etc.
    },
  });

export default HomeScreen;