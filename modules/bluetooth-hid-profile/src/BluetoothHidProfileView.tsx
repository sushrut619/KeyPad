import { requireNativeView } from 'expo';
import * as React from 'react';

import { BluetoothHidProfileViewProps } from './BluetoothHidProfile.types';

const NativeView: React.ComponentType<BluetoothHidProfileViewProps> =
  requireNativeView('BluetoothHidProfile');

export default function BluetoothHidProfileView(props: BluetoothHidProfileViewProps) {
  return <NativeView {...props} />;
}
