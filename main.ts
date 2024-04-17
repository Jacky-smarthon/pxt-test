/**
 * Test block
 */
//% weight=999 color=#3CB371 icon="" block="Test"
namespace test {
    let battery_level = 0

    //% blockId="smarthon_get_battery_level"
    //% block="Get battery level (percentage) at Pin %pin"

    export function getBattery(pin: AnalogPin): number {
        let max = 660;   // define the max reading from battery
        let min = 560;   // define the min reading from battery
        let sum = 0;

        //  read 30 times to get the average
        for (let n = 0; n < 30; n++) {
            sum += pins.analogReadPin(pin);
            basic.pause(10);
        }
        let avg = sum / 30;

        if (avg > min && avg < max) {
            battery_level = Math.ceil(
                pins.map(avg, min, max, 0, 100) / 5) * 5;
            //  round up to multiple of 5
        }
        else if (avg > max) {
            battery_level = 100;
        }
        else {
            battery_level = 0;
        }
        return battery_level;
    }
}
