import { Component, OnInit } from '@angular/core';
import { EventType } from 'src/app/core/constants/events';
import { EventService } from 'src/app/core/service/event.service';
import { HttpService } from 'src/app/core/service/http.service';

declare var $: any;

@Component({
	selector: 'app-neighborhood',
	templateUrl: './neighborhood.component.html',
	styleUrls: ['./neighborhood.component.scss'],
})
export class NeighborhoodComponent implements OnInit {
	info: any = [
		{
			id: 0,
			neighbornhoodTag: 'Coconutgroove',
			tittle: 'Coconut Groove',
			description:
				"Here is a little text that describes the lovely nwighborhoodn you see in the picture to the left. Look at it, it is awesome and wonderfull. Oh my god I can't belive how beautiful it is. 1",
			population: 'Dinamico',
			availability: 'Dinamico',
		},
		{
			id: 1,
			neighbornhoodTag: 'Morningssidebay',
			tittle: 'MorningSide Bay',
			description:
				"Here is a little text that describes the lovely nwighborhoodn you see in the picture to the left. Look at it, it is awesome and wonderfull. Oh my god I can't belive how beautiful it is. 3",
			population: 'Dinamico',
			availability: 'Dinamico',
		},
		{
			id: 2,
			neighbornhoodTag: 'Coralway',
			tittle: 'Coral Way',
			description:
				"Here is a little text that describes the lovely nwighborhoodn you see in the picture to the left. Look at it, it is awesome and wonderfull. Oh my god I can't belive how beautiful it is. 2",
			population: 'Dinamico',
			availability: 'Dinamico',
		},
	];
	items: any = [];
	constructor(private eventService: EventService, private _http:HttpService) {}

	ngOnInit(): void {
		this.eventService.broadcast(EventType.CHANGE_PAGE_TITLE, {
			title: 'Neighborhood',
			breadCrumbItems: [
				{ label: 'Settings', path: '.' },
				{ label: 'Settings/Neighborhood', path: '.', active: true },
			],
		});
		this._fetchData();
	}

	_fetchData() {
		this._http.get('/config/neighborhood',true).subscribe((res:any)=>{
			debugger;
		   console.log(res);
		})
    }

	fnModal(action: string): void {
		$('#modalNeighborhood').modal(action);
	}
}
