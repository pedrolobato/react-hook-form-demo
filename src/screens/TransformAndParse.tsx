import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function TransformAndParse() {
  const [phoneNumber, setPhoneNumber] = useState("(31) 99999-9999");

  async function onSubmit() {}

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.spaceBottom}>
        Contato
      </Text>
      <TextInput
        value={phoneNumber}
        label="Número de celular"
        onChangeText={setPhoneNumber}
        style={styles.spaceBottom}
        keyboardType="number-pad"
      />
      <Button mode="contained" style={styles.spaceTop} onPress={onSubmit}>
        Cadastrar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 32 },
  spaceBottom: { marginBottom: 16 },
  spaceTop: { marginTop: 16 },
});
