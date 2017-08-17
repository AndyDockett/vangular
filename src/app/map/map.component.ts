import { AgmCoreModule } from '@agm/core';


import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
}) 

export class MapComponent {
    public map: any = { lat: 51.678418, lng: 7.809007 };
}