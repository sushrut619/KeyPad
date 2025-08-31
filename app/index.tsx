import { Text, View } from "react-native";
import { useSelector } from "react-redux";

import Keyboard from "@/components/Keyboard";
import { RootState } from "@/data/store";
import { getLayout } from "@/assets/keyboardLayouts";

export default function Index() {
  const selectedLayout = useSelector((state: RootState) => state.keyboard.layout);
  const layout = getLayout(selectedLayout);
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
