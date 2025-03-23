import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, View, StyleSheet } from "react-native";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const [isLoading, setIsLoading] = React.useState(true);
  const navigation = useNavigation();

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigation.navigate("Login");
    }
    setIsLoading(false);
  }, [isAuthenticated, navigation]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6200ee" />
      </View>
    );
  }

  return isAuthenticated ? <>{children}</> : null;
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProtectedRoute;
