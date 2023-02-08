import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
	selector: 'app-marketplace',
	templateUrl: './marketplace.component.html',
	styleUrls: ['./marketplace.component.scss'],
})
export class MarketplaceComponent implements OnInit {
	items: any[] = [];

	constructor() {}

	ngOnInit(): void {}

	fnModal(action: string): void {
		$('#modalMarketPlace').modal(action);
	}
}
