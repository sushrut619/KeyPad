import { Text, View } from "react-native";

function SingleKey(props: { keyLabel: string }) {
    const { keyLabel } = props;
    return (
        <View style={{ height: 60, width: 60, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center', borderRadius: 8 }}>
            <Text>{keyLabel}</Text>
        </View>
    );
}

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
