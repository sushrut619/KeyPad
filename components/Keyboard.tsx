import { Text, View, ViewStyle } from "react-native";

import { SingleKey } from "./SingleKey";

function Keyboard({ layout, keyboardStyle }: { layout: string[], keyboardStyle: ViewStyle }) {
    return (
        <View style={keyboardStyle}>
            {layout.map((keyLabel) => {
                return (
                    <SingleKey keyLabel={keyLabel} key={keyLabel}/>
                );
            })}
        </View>
    );
}

export default Keyboard;
