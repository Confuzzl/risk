class Defender {
    assets = 100;
}

const user = new Defender();

class Protection {
    name = "";
    strength = 1.0;

    constructor(name) {
        this.name = name;
    }
}

const protections = [
    new Protection("Secure Configuration"),
    new Protection("Access Control"),
    new Protection("Malware Protection"),
    new Protection("Security Training"),
    new Protection("Building Security"),
    new Protection("Network Monitoring"),
    new Protection("Security Policies"),
    new Protection("Firewalls and Advanced Security Devices"),
    new Protection("Data Backup"),
];

function exposureFactor() {
    return Math.max(
        0,
        1 -
            protections.reduce(
                (acc, protection) =>
                    acc + protection.strength / protections.length,
                0
            )
    );
}
function singleLossExpectancy() {
    user.assets * exposureFactor();
}

console.log(`ef: ${exposureFactor()}`);

function main() {
    // const start = Date.now();
    // setInterval(() => {
    //     loop(start);
    // }, 100);
}

// function loop(start) {
//     document.getElementById("time").innerText = `Time: ${Date.now() - start}`;
// }
