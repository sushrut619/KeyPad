import { Text, View } from "react-native";

import Keyboard from "@/components/keyboard";
import { layout } from "@/assets/keyboardLayouts/alphabetical";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Keyboard layout={layout} />
    </View>
  );
}
