class petrolPump {
    constructor(petrol, distance) {
        this.petrol = petrol;
        this.distance = distance;
    }
}

function tour(p, n) {
    let start = 0; fuelTank = 0; fuelShortage = 0;
    for (let i = 0; i < n; i++) {
        fuelTank += p[i].petrol - p[i].distance
        if (fuelTank < 0) {
            start = i + 1;
            fuelShortage += fuelTank;
            fuelTank = 0;
        }
    }
    if (fuelTank + fuelShortage >= 0)
        console.log(start)

    console.log(-1)
}

let p = [new petrolPump(6, 4), new petrolPump(3, 6), new petrolPump(7, 3)];
let n = p.length;
tour(p, n);