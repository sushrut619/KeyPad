// Reexport the native module. On web, it will be resolved to BluetoothHidProfileModule.web.ts
// and on native platforms to BluetoothHidProfileModule.ts
import BluetoothHidProfileModule from './src/BluetoothHidProfileModule';

export { BluetoothHidProfileModule };
export * from  './src/BluetoothHidProfile.types';

export function getTheme(): string {
  return BluetoothHidProfileModule.getTheme();
}
