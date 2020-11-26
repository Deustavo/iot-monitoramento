export function ThingSpeak() {
    fetch('https://api.thingspeak.com/channels/1228925/feeds.json?results= 2').then((res) => {
        res.json().then((res) => { return res });
    });
}