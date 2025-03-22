import React from "react";
import { Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { StyleProp } from "react-native/Libraries/StyleSheet/StyleSheet";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

// Définir les props du composant FormInput
interface FormInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  icon: string;
  multiline?: boolean;
  numberOfLines?: number;
  keyboardType?: "default" | "numeric" | "email-address" | "phone-pad";
  style?: StyleProp<ViewStyle>;
  error?: boolean;
  errorText?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  value,
  onChangeText,
  icon,
  multiline = false,
  numberOfLines = 1,
  keyboardType = "default",
  style,
  error = false,
  errorText = "",
}) => {
  return (
    <>
      <TextInput
        label={label}
        value={value}
        onChangeText={onChangeText}
        style={[styles.input, style]}
        mode="outlined"
        multiline={multiline}
        numberOfLines={numberOfLines}
        keyboardType={keyboardType}
        left={<TextInput.Icon icon={icon} />}
        error={error}
      />
      {error && <Text style={styles.errorText}>{errorText}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 8,
    backgroundColor: "#fff",
  },
  errorText: {
    color: "red",
    marginBottom: 16,
  },
});

export default FormInput;
