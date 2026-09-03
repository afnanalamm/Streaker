import { Text, View, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context"

export default function Index() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text>Edit src/app/index.tsx to edit this screen.</Text>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
