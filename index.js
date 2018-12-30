const produceDrivingRange = (range) => {
    return (street1, street2) => {
        const tripDistance = calculateDistance(street1, street2);

        if (tripDistance <= range) {
            return `within range by ${range - tripDistance}`;
        } else {
            return `${tripDistance - range} blocks out of range`;
        }
    };
};

const calculateDistance = (street1, street2) => {
    return Math.abs(streetToNumber(street1) - streetToNumber(street2));
};
const streetToNumber = street => Number(street.replace("th", ''));

const produceTipCalculator = (tipRate) => {
    return (fare) => {
        return fare * tipRate;
    };
};

const createDriver = () => {
    let driverId = 0;
    return class Driver {
        constructor(name) {
            this.id = ++driverId;
            this.name = name;
        }
    };
};