import { Text, View, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context"
import HabitCard from "../../components/HabitCard";

export default function Index() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text>This is a screen</Text>
      </View>

      <HabitCard/>
    
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  card: {
    flex: 1,
    width: "80%",
    
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: 'skyblue',
    borderRadius: 15,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  }
});
