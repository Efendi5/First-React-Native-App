import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem({ text, onDeleteItem, id }) {
  return (
    <Pressable
      onPress={() => onDeleteItem(id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItems}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItems: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "grey",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
  },
});
