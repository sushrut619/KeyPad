import { Text, View } from "react-native";

import { SingleKey } from "./SingleKey";

function Keyboard({ layout }: { layout: string[] }) {
    return (
        <View style={{
            flex: 1, 
            flexWrap: 'wrap', 
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 8,
            maxHeight: '50%',
            margin: 4,
        }}>
            {layout.map((keyLabel) => {
                return (
                    <SingleKey keyLabel={keyLabel} key={keyLabel}/>
                );
            })}
        </View>
    );
}

export default Keyboard;
