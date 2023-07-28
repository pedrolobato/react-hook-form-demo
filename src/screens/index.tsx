import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CustomNavigationBar from "../components/CustomNavigationBar";

import Home from "./Home";
import Simple from "./Simple";
import Validations from "./Validations";
import FieldArray from "./FieldArray";
import TransformAndParse from "./TransformAndParse";

export type RootStackParamList = {
  Home: undefined;
  Simple: undefined;
  Validations: undefined;
  FieldArray: undefined;
  TransformAndParse: undefined;
};

export type RouteNames = keyof RootStackParamList;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Screens(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: (props) => <CustomNavigationBar {...props} />,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Simple" component={Simple} />
        <Stack.Screen name="Validations" component={Validations} />
        <Stack.Screen
          name="TransformAndParse"
          options={{ title: "Transform and Parse" }}
          component={TransformAndParse}
        />
        <Stack.Screen name="FieldArray" component={FieldArray} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
