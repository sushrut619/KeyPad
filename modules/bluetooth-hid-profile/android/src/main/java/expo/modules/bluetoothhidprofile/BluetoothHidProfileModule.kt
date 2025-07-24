package expo.modules.bluetoothhidprofile

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class BluetoothHidProfileModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("BluetoothHidProfile")

    Function("getTheme") {
      return@Function "system"
    }
  }
}
