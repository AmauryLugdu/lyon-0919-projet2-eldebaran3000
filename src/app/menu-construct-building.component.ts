import { Component, OnInit} from '@angular/core';
import { BuildingService } from './building.service'
import { Building } from './building';

@Component({
    selector: 'app-menu-construct-building',
    templateUrl: './menu-construct-building.component.html',
    styleUrls: ['./menu-construct-building.component.scss']
})
export class MenuConstructBuildingComponent implements OnInit {;
    buildings: Building[];
    clickMenu: boolean;
    
    constructor(private buildingService: BuildingService) { }


    ngOnInit() {

    }
    clickAppear() {
        this.buildingService.clickAppear();
        this.buildings = this.buildingService.buildings;
        this.clickMenu = this.buildingService.clickMenu;
    }
   
    
  

}