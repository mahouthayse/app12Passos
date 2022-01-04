import React from "react";
import { Snackbar } from "react-native-paper";
import colors from "../../Style/colors";
import { StyleSheet } from "react-native";

export const AlertBar = ({ visible, message, type, onChange }) => {
    const styles = StyleSheet.create({
        snackWrapper: {
            position: "absolute",
            bottom: 10,
        },
        snack: {
            backgroundColor: type === "success" ? `${colors.success}`: type === "info" ? `${colors.primary}` : `${colors.error}`,
        },
    });

    return (
        <Snackbar
            duration={2000}
            visible={visible}
            wrapperStyle={styles.snackWrapper}
            style={styles.snack}
            onDismiss={() => onChange()}
            action={{
                label: "Fechar",
                onPress: () => onChange(),
            }}
            theme={{
                colors: {
                    surface: `${colors.white}`,
                    accent: `${colors.white}`,
                },
            }}
        >
            {message}
        </Snackbar>
    );
};