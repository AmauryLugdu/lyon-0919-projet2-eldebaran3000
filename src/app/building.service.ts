import { Injectable } from '@angular/core';
import { Building } from './building';



@Injectable({
    providedIn: 'root'
})
export class BuildingService {
    clickMenu: boolean = false;
    buildings: Building[] =
        [{
            name: 'Farm',
            xPosition: 0,
            yPosition: 0,
            humanCapicity: 0,
            productionCapacity: 8,
            productionSpeed: 4,
            foodConsumption: 0,
            elecConsumption: 4,
            cost: 4,
            nextRoad: false,
            minWorker: 2,
            maxWorker: 10,
            image: "",
        },
        {
            name: 'Extractor',
            xPosition: 0,
            yPosition: 0,
            humanCapicity: 0,
            productionCapacity: 8,
            productionSpeed: 4,
            foodConsumption: 0,
            elecConsumption: 4,
            cost: 4,
            nextRoad: false,
            minWorker: 2,
            maxWorker: 10,
            image: "",
        },
        {
            name: 'Power Station',
            xPosition: 0,
            yPosition: 0,
            humanCapicity: 0,
            productionCapacity: 8,
            productionSpeed: 4,
            foodConsumption: 0,
            elecConsumption: 0,
            cost: 4,
            nextRoad: false,
            minWorker: 2,
            maxWorker: 10,
            image: "",
        },
        {
            name: 'Dormitory',
            xPosition: 0,
            yPosition: 0,
            humanCapicity: 10,
            productionCapacity: 8,
            productionSpeed: 4,
            foodConsumption: 6,
            elecConsumption: 6,
            cost: 4,
            nextRoad: false,
            minWorker: 0,
            maxWorker: 0,
            image: "",
        },
        {
            name: 'Road',
            xPosition: 0,
            yPosition: 0,
            humanCapicity: 0,
            productionCapacity: 0,
            productionSpeed: 0,
            foodConsumption: 0,
            elecConsumption: 0,
            cost: 6,
            nextRoad: false,
            minWorker: 0,
            maxWorker: 0,
            image: "",
        }

        ];

    constructor() { }

    clickAppear() {
        this.clickMenu = !this.clickMenu;
    }


}
