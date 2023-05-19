import * as React from "react";
import Button from "./Button";
import { View, Text, Alert } from "react-native";
import { Styles } from "../styles/GlobalStyles";
import { myColors } from "../styles/myColors";
import EnterButton from "./EnterButton";

export default function MyKeyboard(props) {
  const [firstNumber, setFirstNumber] = React.useState("");
  const [secondNumber, setSecondNumber] = React.useState("");
  const [operation, setOperation] = React.useState("");

  const result = props.result;

  const checkResult = () => {
    const parsedFirstNumber = parseFloat(firstNumber);
    const parsedResult = parseFloat(result);
  
    if (parsedFirstNumber === parsedResult) {
      Alert.alert("✅", "\nCorrecto!");
      setFirstNumber("");
    } else {
      Alert.alert("❌ Incorrecto!", "\nRespuesta correcta: " + result);
      setFirstNumber("");
    }
  
    props.onAlert();
  };

  const handleNumberPress = (buttonValue: string) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  };

  const firstNumberDisplay = () => {
    if (firstNumber && firstNumber.length < 6) {
      return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>;
    }
    if (firstNumber === "") {
      return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
    }
    if (firstNumber.length > 5 && firstNumber.length < 8) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
          {firstNumber}
        </Text>
      );
    }
    if (firstNumber.length > 7) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
          {firstNumber}
        </Text>
      );
    }
  };

  const handleOperationPress = (buttonValue: string) => {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber("");
  };

  return (
    <View style={Styles.viewBottom}>
      <View
        style={{
          height: 120,
          width: "90%",
          justifyContent: "flex-end",
          alignSelf: "center",
        }}
      >
        <Text style={Styles.screenSecondNumber}>
          {secondNumber}
          <Text style={{ color: "purple", fontSize: 50, fontWeight: '500' }}>{operation}</Text>
        </Text>
        {firstNumberDisplay()}
      </View>
      <View style={Styles.row}>
        <Button title="7" onPress={() => handleNumberPress("7")} />
        <Button title="8" onPress={() => handleNumberPress("8")} />
        <Button title="9" onPress={() => handleNumberPress("9")} />
        <Button title="⌫" isGray onPress={() => setFirstNumber(firstNumber.slice(0, -1))} />
      </View>
      <View style={Styles.row}>
        <Button title="4" onPress={() => handleNumberPress("4")} />
        <Button title="5" onPress={() => handleNumberPress("5")} />
        <Button title="6" onPress={() => handleNumberPress("6")} />
        <Button title="." isGray onPress={() => handleNumberPress(".")} />
      </View>
      <View style={Styles.row}>
        <Button title="1" onPress={() => handleNumberPress("1")} />
        <Button title="2" onPress={() => handleNumberPress("2")} />
        <Button title="3" onPress={() => handleNumberPress("3")} />
        <Button title="-" onPress={() => handleNumberPress("-")} />
      </View>
      
      <View style={Styles.row}>
        <Button title="0" onPress={() => handleNumberPress("0")} />
        <EnterButton title="↵" isBlue onPress={() => checkResult()} />
      </View>
    </View>
  );
}