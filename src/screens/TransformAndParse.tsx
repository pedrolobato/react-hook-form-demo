import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

import ObjectPreview from "../components/ObjectPreview";
import { formatPhoneNumber } from "../utils/format/phoneNumber.format";

export default function TransformAndParse() {
  const [phoneNumber, setPhoneNumber] = useState("");

  function onSubmit() {}

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.spaceBottom}>
        Contato
      </Text>
      <TextInput
        value={phoneNumber}
        label="Número de celular"
        onChangeText={(text) => setPhoneNumber(formatPhoneNumber(text))}
        style={styles.spaceBottom}
        keyboardType="number-pad"
      />
      <Button mode="contained" style={styles.spaceTop} onPress={onSubmit}>
        Cadastrar
      </Button>
      <ObjectPreview data={{ phoneNumber }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 32 },
  spaceBottom: { marginBottom: 16 },
  spaceTop: { marginTop: 16 },
});
