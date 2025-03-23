// components/CustomTabBarButton.tsx
import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

interface CustomTabBarButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
}

const CustomTabBarButton: React.FC<CustomTabBarButtonProps> = ({
  children,
  ...props
}) => {
  // Filtrer les propriétés non valides pour TouchableOpacity
  const validProps = {
    ...props,
    delayLongPress:
      props.delayLongPress === null ? undefined : props.delayLongPress, // Convertir null en undefined
  };

  return <TouchableOpacity {...validProps}>{children}</TouchableOpacity>;
};

export default CustomTabBarButton;
