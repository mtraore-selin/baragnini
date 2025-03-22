import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Button, Text, useTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FormInput from "../components/FormInput";

export default function AddServiceScreen() {
  const [serviceName, setServiceName] = useState("Nom du service");
  const [description, setDescription] = useState("Description du service");
  const [price, setPrice] = useState("0");
  const [showForm, setShowForm] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!serviceName.trim())
      newErrors.serviceName = "Le nom du service est obligatoire";

    if (!description.trim())
      newErrors.description = "La description est obligatoire";

    if (price && isNaN(Number(price)))
      newErrors.price = "Le prix doit être un nombre valide";

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  };

  useEffect(() => {
    validateForm();
  }, [serviceName, description, price]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ajouter un service</Text>

      {/* Champ pour le nom du service */}
      <FormInput
        label="Nom du service"
        value={serviceName}
        onChangeText={setServiceName}
        icon="format-title"
        error={!!errors.serviceName} // Afficher l'erreur si elle existe
        errorText={errors.serviceName}
      />

      {/* Champ pour la description du service */}
      <FormInput
        label="Description"
        value={description}
        onChangeText={setDescription}
        icon="text"
        multiline
        numberOfLines={4}
        error={!!errors.description} // Afficher l'erreur si elle existe
        errorText={errors.description}
      />

      {/* Champ pour le prix du service */}
      <FormInput
        label="Prix (optionnel)"
        value={price}
        onChangeText={setPrice}
        icon="currency-eur"
        keyboardType="numeric"
        error={!!errors.price} // Afficher l'erreur si elle existe
        errorText={errors.price}
      />

      {/* Bouton pour publier le service */}
      <Button
        mode="contained"
        disabled={!isFormValid}
        onPress={() => setShowForm(true)}
        style={styles.button}
        icon={() => <Icon name="plus" size={20} color="#fff" />}
      >
        Publier
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#6200ee",
  },
  input: {
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  button: {
    marginTop: 20,
    paddingVertical: 8,
    backgroundColor: "#6200ee",
  },
});
