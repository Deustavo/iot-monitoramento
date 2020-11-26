export function ThingSpeak() {
    fetch('https://api.thingspeak.com/channels/1228925/fields/1.json?Results=2').then((res) => {
        res.json().then((res) => {
            return res 
            });
    });
}