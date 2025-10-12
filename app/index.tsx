import { useRouter } from 'expo-router';
import { Button, Text, View } from "react-native";
import { useSelector } from "react-redux";

import Keyboard from "@/components/Keyboard";
import { RootState } from "@/data/store";
import { KeyboardStateSelectors } from "@/data/keyboard";

export default function Index() {
  const router = useRouter();
  const keyboardStyle = useSelector((state: RootState) => state.keyboard.style);
  const layout = useSelector(KeyboardStateSelectors.selectKeyboardLayout);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row", gap: 24, marginBottom: 8 }}>
        <Button
          title="Select layout"
          onPress={() => {
            router.navigate("/selectKeyboard");
            console.log("Select layout pressed");
          }}
        />
        <Button
          title="Edit layout"
          onPress={() => {
            router.navigate("/editLayout");
            console.log("Edit layout pressed");
          }}
        />
      </View>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Keyboard layout={layout} keyboardStyle={keyboardStyle} />
    </View>
  );
}
