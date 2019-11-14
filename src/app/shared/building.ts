export  class Building {
    level: number;
    name: string;
    maxCapacity: number;
    production: number;
    foodConsumption: number;
    elecConsumption: number;
    cost:number;
    nextRoad: boolean;
    nbWorkers: number;
    minWorker: number;
    maxWorker: number;
    imageOn: string;
    imageOff: string;
    deleteIron: number;
    isActivate: boolean;
    upgradeCost: number;


    constructor (name: string, cost: number, imageOn:string, deleteIron: number) {
        this.name = name;
        this.cost = cost;
        this.imageOn = imageOn;
        this.deleteIron = deleteIron;
    }
};
