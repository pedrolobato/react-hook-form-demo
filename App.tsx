import React from "react";
import { PaperProvider } from "react-native-paper";

import Screens from "./src/screens";

export default function App(): JSX.Element {
  return (
    <PaperProvider>
      <Screens />
    </PaperProvider>
  );
}
