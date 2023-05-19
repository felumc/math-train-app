import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { Styles } from "../styles/GlobalStyles";
import { ThemeContext } from "../context/ThemeContext";
import React from "react";

interface ButtonProps {
    title: string;
    onPress: () => void;
    isBlue?: boolean;
    isGray?: boolean;
}

export default function EnterButton({ title, onPress, isBlue, isGray } : ButtonProps) {
    const theme = useContext(ThemeContext);
    return (
        <TouchableOpacity
            style={
                isBlue ? Styles.btnBlueBig : isGray ? Styles.btnGray : theme === "light" ? Styles.btnLight : Styles.btnDark
            }
            onPress={onPress}
        >
            <Text
                style={
                    isBlue || isGray ? Styles.smallTextLight : theme === "dark" ? Styles.smallTextLight : Styles.smallTextDark
                }
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};