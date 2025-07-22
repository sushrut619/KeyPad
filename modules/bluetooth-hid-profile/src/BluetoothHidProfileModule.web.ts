import { registerWebModule, NativeModule } from 'expo';

import { ChangeEventPayload } from './BluetoothHidProfile.types';

type BluetoothHidProfileModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
}

class BluetoothHidProfileModule extends NativeModule<BluetoothHidProfileModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
};

export default registerWebModule(BluetoothHidProfileModule, 'BluetoothHidProfileModule');
