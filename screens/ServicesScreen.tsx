import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { Card, Title, Paragraph, useTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Service } from "../types/serviceType";
import { services } from "../data/services";

interface ServiceItemProps {
  item: Service;
}

// Composant ServiceItem
const ServiceItem: React.FC<ServiceItemProps> = ({ item }) => {
  const theme = useTheme();

  return (
    <Card style={styles.card}>
      <Card.Content style={styles.cardContent}>
        <Icon
          name={item.icon}
          size={32}
          color={theme.colors.primary}
          style={styles.icon}
        />
        <View style={styles.textContainer}>
          <Title style={styles.title}>{item.name}</Title>
          <Paragraph style={styles.subtitle}>
            Cliquez pour plus de détails
          </Paragraph>
        </View>
      </Card.Content>
    </Card>
  );
};

// Écran principal
export default function ServicesScreen() {
  return (
    <View style={styles.screenContainer}>
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ServiceItem item={item} />}
        contentContainerStyle={styles.container}
        ListHeaderComponent={
          <Text style={styles.header}>Liste des services disponibles</Text>
        }
        ListFooterComponent={<Text style={styles.footer}>Fin de la liste</Text>}
      />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  screenContainer: { flex: 1 },
  container: { padding: 16 },
  card: {
    marginBottom: 16,
    elevation: 4, // Ombre pour Android
    shadowColor: "#000", // Ombre pour iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: { marginRight: 16 },
  textContainer: { flex: 1 },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  footer: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 16,
    color: "#666",
  },
});
