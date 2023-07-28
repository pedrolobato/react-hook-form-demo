import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

import ObjectPreview from "../components/ObjectPreview";

export default function Simple() {
  const [user, setUser] = useState("lobato");
  const [password, setPassword] = useState("123456");

  function onSubmit() {}

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.spaceBottom}>
        Acesso
      </Text>
      <TextInput
        value={user}
        label="Usuário"
        onChangeText={setUser}
        style={styles.spaceBottom}
        autoCorrect={false}
        autoCapitalize="none"
      />
      <TextInput
        value={password}
        label="Senha"
        onChangeText={setPassword}
        style={styles.spaceBottom}
        keyboardType="number-pad"
        secureTextEntry
      />
      <Button mode="contained" style={styles.spaceTop} onPress={onSubmit}>
        Entrar
      </Button>
      <ObjectPreview data={{ user, password }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 32 },
  spaceBottom: { marginBottom: 16 },
  spaceTop: { marginTop: 16 },
});
