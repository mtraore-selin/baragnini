import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  Avatar,
  Card,
  Title,
  Paragraph,
  Button,
  useTheme,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function ProfileScreen() {
  const theme = useTheme();

  // Données du profil (à remplacer par des données dynamiques)
  const user = {
    name: "Mohamed TRAORE",
    email: "mtra0102@gmail.com",
    bio: "Développeur passionné par les technologies mobiles et les applications innovantes.",
    avatarUrl: "https://via.placeholder.com/150", // URL de l'avatar
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Section Avatar et Nom */}
      <View style={styles.header}>
        <Avatar.Image
          source={{ uri: user.avatarUrl }}
          size={100}
          style={styles.avatar}
        />
        <Title style={styles.name}>{user.name}</Title>
        <Paragraph style={styles.email}>{user.email}</Paragraph>
      </View>

      {/* Section Bio */}
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.sectionTitle}>À propos de moi</Title>
          <Paragraph style={styles.bio}>{user.bio}</Paragraph>
        </Card.Content>
      </Card>

      {/* Section Actions */}
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.sectionTitle}>Actions</Title>
          <Button
            mode="contained"
            onPress={() => console.log("Modifier le profil")}
            style={styles.button}
            icon={() => <Icon name="pencil" size={20} color="#fff" />}
          >
            Modifier le profil
          </Button>
          <Button
            mode="outlined"
            onPress={() => console.log("Se déconnecter")}
            style={styles.button}
            icon={() => (
              <Icon name="logout" size={20} color={theme.colors.error} />
            )}
          >
            Se déconnecter
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  email: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  card: {
    marginBottom: 20,
    elevation: 4, // Ombre pour Android
    shadowColor: "#000", // Ombre pour iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: "#666",
  },
  button: {
    marginTop: 10,
  },
});
