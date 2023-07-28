import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function CodePreview({ data }: { data: Object }) {
  return (
    <View style={styles.container}>
      <Text variant="bodyMedium">{JSON.stringify(data, null, 2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    margin: 16,
    backgroundColor: "#cdcdcd",
    borderRadius: 10,
  },
});
