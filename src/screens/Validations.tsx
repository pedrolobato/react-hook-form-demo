import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

import ObjectPreview from "../components/ObjectPreview";

export default function Validations() {
  const [user, setUser] = useState("lobato");
  const [email, setEmail] = useState("lobato@gmail.com");
  const [password, setPassword] = useState("123456");

  function onSubmit() {}

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.spaceBottom}>
        Criar conta
      </Text>
      <TextInput
        value={user}
        label="Nome de usuário"
        onChangeText={setUser}
        style={styles.spaceBottom}
        autoCorrect={false}
        autoCapitalize="none"
      />
      <TextInput
        value={email}
        label="E-mail"
        onChangeText={setEmail}
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
        Cadastrar
      </Button>
      <ObjectPreview data={{ user, email, password }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 32 },
  spaceBottom: { marginBottom: 16 },
  spaceTop: { marginTop: 16 },
});
