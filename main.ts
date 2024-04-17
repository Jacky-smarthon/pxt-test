<<<<<<< HEAD
=======
/**
 * Test block
 */
//% weight=999 color=#3CB371 icon="" block="Test"
namespace test {
    let battery_level = 0

    //% blockId="smarthon_get_battery_level"
    //% block="Get battery level (percentage) at Pin %pin"

    export function getBattery(pin: AnalogPin): number {
        let max = 700;   // define the max reading from battery
        let min = 570;   // define the min reading from battery

        if (pins.analogReadPin(pin) > min && pins.analogReadPin(pin) < max) {
            battery_level = Math.ceil(
                pins.map(pins.analogReadPin(pin), min, max, 0, 100) / 5) * 5;
                //  round up to multiple of 5
        } else {
            battery_level = 0; // reading outside the max and min returns 0
        }
        return battery_level;
    }
}
>>>>>>> ace53810c2cd590a61cfb03a73cf8c1d3238899a
