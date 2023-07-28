import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Card, Text, TextInput } from "react-native-paper";

import ObjectPreview from "../components/ObjectPreview";
import { formatDate } from "../utils/format/date.format";

export default function FieldArray() {
  const [item, setItem] = useState("Maçã");
  const [weight, setWeight] = useState("1,32t");
  const [date, setDate] = useState("");

  function onSubmit() {}

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text variant="headlineMedium" style={styles.spaceBottom}>
        Colheita
      </Text>
      <Card style={styles.fieldContainer}>
        <Card.Title title="Lote #1" />
        <Card.Content>
          <TextInput
            value={item}
            label="Item"
            onChangeText={setItem}
            style={styles.spaceBottom}
            autoCorrect={false}
            autoCapitalize="none"
          />

          <View style={styles.row}>
            <TextInput
              value={weight}
              label="Peso"
              onChangeText={setWeight}
              style={{ ...styles.spaceBottom, width: "40%" }}
              keyboardType="number-pad"
            />
            <TextInput
              value={date}
              label="Data"
              onChangeText={(text) => setDate(formatDate(text))}
              style={{ ...styles.spaceBottom, width: "55%" }}
              keyboardType="number-pad"
            />
          </View>
        </Card.Content>
      </Card>
      <Card style={styles.fieldContainer}>
        <Card.Title title="Lote #2" />
        <Card.Content>
          <TextInput
            value={item}
            label="Item"
            onChangeText={setItem}
            style={styles.spaceBottom}
            autoCorrect={false}
            autoCapitalize="none"
          />

          <View style={styles.row}>
            <TextInput
              value={weight}
              label="Peso"
              onChangeText={setWeight}
              style={{ ...styles.spaceBottom, width: "40%" }}
              keyboardType="number-pad"
            />
            <TextInput
              value={date}
              label="Data"
              onChangeText={setDate}
              style={{ ...styles.spaceBottom, width: "55%" }}
              keyboardType="number-pad"
            />
          </View>
        </Card.Content>
      </Card>
      <Card style={styles.fieldContainer}>
        <Card.Content
          style={{
            alignItems: "center",
          }}
        >
          <Text variant="labelLarge">Peso Total</Text>
          <Text variant="headlineMedium">4t</Text>
        </Card.Content>
      </Card>
      <Button mode="contained" style={styles.spaceTop} onPress={onSubmit}>
        Salvar
      </Button>
      <ObjectPreview data={{}} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 32 },
  fieldContainer: { marginBottom: 16 },
  row: { flexDirection: "row", justifyContent: "space-between" },
  spaceBottom: { marginBottom: 16 },
  spaceTop: { marginTop: 16 },
});
