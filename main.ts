/**
 * Test block
 */
//% weight=999 color=#3CB371 icon="" block="Test"
namespace test {
    let battery_variable = 0

    //% blockId="smarthon_get_battery_level"
    //% block="Get battery level (percentage) at Pin %pin"

    export function getBattery(pin: AnalogPin): number {
        battery_level = Math.round(pins.map(
            pins.analogReadPin(pin),
            580,
            660,
            0,
            100
        ));
        return battery_level;
    }
}

