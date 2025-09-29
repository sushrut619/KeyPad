import { memo } from "react";
import { Text, View } from "react-native";
import { predefinedLayouts } from "@/assets/keyboardLayouts";

// const staticLayouts = ["alphabetical", "qwerty", "dvorak", "azerty", "colemak"] as const;

const MemoizedPredefinedLayouts = memo(function PredefinedLayouts() {
    console.log("Rendering PredefinedLayouts");
    return (
        <>
            {
                predefinedLayouts.map(
                    (layoutName) => (<Text key={layoutName}>{layoutName}</Text>)
                )
            }
        </>
    );
})

function SelectKeyboard() {
  return (
    <View style={{ gap: 16, margin: 16 }}>
        <MemoizedPredefinedLayouts />
    </View>
  );
}

export default SelectKeyboard;