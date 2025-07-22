// Reexport the native module. On web, it will be resolved to BluetoothHidProfileModule.web.ts
// and on native platforms to BluetoothHidProfileModule.ts
export { default } from './src/BluetoothHidProfileModule';
export { default as BluetoothHidProfileView } from './src/BluetoothHidProfileView';
export * from  './src/BluetoothHidProfile.types';
