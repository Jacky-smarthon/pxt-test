/**
 * Test block
 */
//% weight=999 color=#3CB371 icon="" block="Test"
namespace test {
    let battery_level = 0

    //% blockId="smarthon_get_battery_level"
    //% block="Get battery level (percentage) at Pin %pin"

    export function getBattery(pin: AnalogPin): number {
      let max = 670;   // define the max reading from battery
      let min = 530;   // define the min reading from battery

      if (pins.analogReadPin(pin) < min && pins.analogReadPin(pin) > max) {
          battery_level = Math.ceil(
              pins.map(pins.analogReadPin(pin), min, max, 0, 100) / 5 * 5);
      } else {
      	   battery_level = 0; // reading outside the max and min returns 0
      }
        return battery_level;
    }
}
