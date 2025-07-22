import * as React from 'react';

import { BluetoothHidProfileViewProps } from './BluetoothHidProfile.types';

export default function BluetoothHidProfileView(props: BluetoothHidProfileViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
