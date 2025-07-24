import { NativeModule, requireNativeModule } from 'expo';

import { BluetoothHidProfileModuleEvents } from './BluetoothHidProfile.types';

declare class BluetoothHidProfileModule extends NativeModule<BluetoothHidProfileModuleEvents> {
  getTheme: () => string;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<BluetoothHidProfileModule>('BluetoothHidProfile');
