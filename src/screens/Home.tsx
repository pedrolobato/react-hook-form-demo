import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, StyleSheet, View } from "react-native";
import { Divider, List } from "react-native-paper";

import { RootStackParamList, RouteNames } from ".";

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

export default function Home({ navigation }: HomeProps) {
  const menuOptions: Array<{ description: string; routeName: RouteNames }> = [
    { description: "Simple", routeName: "Simple" },
    { description: "Validations", routeName: "Validations" },
    { description: "Transform and Parse", routeName: "TransformAndParse" },
    { description: "Field Array", routeName: "FieldArray" },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={menuOptions}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({ item }) => (
          <List.Item
            title={item.description}
            onPress={() => {
              navigation.navigate(item.routeName);
            }}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
