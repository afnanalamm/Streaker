import { View, StyleSheet } from "react-native";

export default function HabitCard() {
  return (
    <View style={styles.card}>
        <View style={styles.iconArea}>
            {/* // code to be added later */}
        </View>
        <View style={styles.habitModifier}>
            {/* // code to be added later */}
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "90%",
    height: 350,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#9ad7f7",
    borderRadius: 20,
    paddingHorizontal: 2,
    paddingVertical: 18,
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  iconArea: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6b7280",
    borderRadius: 72,
    marginBottom: 12,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },

  habitModifier: {
    width: "90%",
    height: "30%",
    alignSelf: "center",
    alignItems: "center",
    
    justifyContent: "space-evenly",
    backgroundColor: "#f3f4f6",
  }
});
