import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, TextInput, Title, useTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";

const LoginScreen: React.FC = () => {
  const theme = useTheme();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log(email, password);
    // Simuler une connexion réussie
    dispatch(login({ name: "Mohamed TRAORE", email: "mtra0102@gmail.com" }));
    navigation.navigate("Accueil"); // Rediriger vers l'écran d'accueil
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Connexion</Title>

      {/* Champ Email */}
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        mode="outlined"
        left={<TextInput.Icon icon="email" />}
        keyboardType="email-address"
      />

      {/* Champ Mot de passe */}
      <TextInput
        label="Mot de passe"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        mode="outlined"
        secureTextEntry
        left={<TextInput.Icon icon="lock" />}
      />

      {/* Bouton de connexion */}
      <Button
        mode="contained"
        onPress={handleLogin}
        style={styles.button}
        icon={() => <Icon name="login" size={20} color="#fff" />}
      >
        Se connecter
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 20,
  },
});

export default LoginScreen;
