import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Button, Card } from "react-native-paper";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Text style={styles.title}>
          Bienvenue sur notre plateforme de services !
        </Text>
      </View>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardTitle}>Découvrez nos services</Text>
          <Text style={styles.cardText}>
            Trouvez les services dont vous avez besoin ou proposez les vôtres.
          </Text>
          <Button
            mode="contained"
            onPress={() => navigation.navigate("Services")}
          >
            Explorer
          </Button>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardTitle}>Ajoutez votre service</Text>
          <Text style={styles.cardText}>
            Proposez vos compétences et commencez à aider les autres.
          </Text>
          <Button
            mode="contained"
            onPress={() => navigation.navigate("Ajouter un service")}
          >
            Ajouter
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  card: {
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 20,
  },
});
