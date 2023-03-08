import { Component, OnInit } from '@angular/core';
import { EventType } from 'src/app/core/constants/events';
import { FilterPipe } from 'src/app/core/pipes/filter.pipe';
import { EventService } from 'src/app/core/service/event.service';
import { HttpService } from 'src/app/core/service/http.service';
import { SweetAlertService } from 'src/app/core/service/sweet-alert.service';
declare var $: any;
@Component({
	selector: 'app-version',
	templateUrl: './version.component.html',
	styleUrls: ['./version.component.scss'],
})
export class VersionComponent implements OnInit {
	p: number = 1;
	versionList: any[] = [];
	versionListBase: any[] = [];
	items: any[] = [];
	versionData = {
		platform: '',
		version: '',
		compilation: null,
		publishedAt: '',
		isRequired: false,
	};
	filtertext: string = '';
	platform: string = '';
	currentVersion: any[] = [];
	actionModal: string = '';
	plaformArray: any = ['IPhonePlayer', 'Android'];
	constructor(
		private _http: HttpService,
		private eventService: EventService,
		private _filter: FilterPipe,
		private _alert: SweetAlertService
	) {}

	ngOnInit(): void {
		this.eventService.broadcast(EventType.CHANGE_PAGE_TITLE, {
			title: 'Settings - Version',
			breadCrumbItems: [
				{ label: 'Settings', path: '.' },
				{ label: 'Settings/Version', path: '.', active: true },
			],
		});
		this.listVersions();
	}

	fnModal(action: string, operation: string, item?: any): void {
		this.actionModal = operation;
		if (operation == 'Update') {
			let date = new Date(item?.publishedAt * 1000);
			console.log(date);
			let day = ('0' + date.getDate()).slice(-2);
			let month = ('0' + (date.getMonth() + 1)).slice(-2);
			this.versionData = {
				version: item?.version,
				platform: item?.platform,
				isRequired: item?.isRequired,
				compilation: item?.compilation,
				publishedAt: date.getFullYear() + '-' + month + '-' + day,
			};
		}
		$('#modalMarketPlace').modal(action);
	}

	listVersions = () => {
		this._http.get('/config/version/list', true).subscribe((res: any) => {
			this.currentVersion = res.result.filter(
				(x: any) => x.isActive === true
			);
			this.versionListBase = res.result;
			this.versionList = this.versionListBase;
		});
	};

	filter(filtertext: string) {
		this.versionList = this._filter.transform(
			this.versionListBase,
			filtertext,
			['version', 'platform', 'publishedAt']
		);
	}

	createVersion = () => {
		//console.table(this.versionData);
		const time = new Date(this.versionData.publishedAt).getTime() / 1000;
		const data = {
			platform: this.versionData.platform,
			version: this.versionData.version,
			compilation: this.versionData.compilation,
			isRequired: this.versionData.isRequired,
			publishedAt: time,
		};
		if (Object.values(data).some((element) => !element)) {
			this._alert.notify({
				titleText: 'Ingrese todos los campos solicitados',
				icon: 'warning',
			});
			return;
		}

		this._alert
			.confirm({
				title: '¿Seguro que desea guardar?',
				icon: 'question',
				showCancelButton: true,
				showConfirmButton: true,
				cancelButtonText: 'Cancelar',
				confirmButtonText: 'Confirmar',
			})
			.then((response) => {
				if (!response.isConfirmed) {
					return;
				}

				this._http
					.post('/config/version/create', JSON.stringify(data))
					.subscribe((res: any) => {
						if (res.versionData) {
							this.listVersions();
							this.fnModal('hide', 'New');
							this.versionData.platform = '';
							this.versionData.version = '';
							this.versionData.compilation = null;
							this.versionData.publishedAt = '';
							this.versionData.isRequired = false;
						}
					});
			});
	};

	updateVersion = () => {
		//console.table(this.versionData);
		const time = new Date(this.versionData.publishedAt).getTime() / 1000;
		const data = {
			platform: this.versionData.platform,
			version: this.versionData.version,
			compilation: this.versionData.compilation,
			isRequired: this.versionData.isRequired,
			publishedAt: time,
		};

		if (Object.values(data).some((element) => !element)) {
			this._alert.notify({
				titleText: 'Ingrese todos los campos solicitados',
				icon: 'warning',
			});
			return;
		}

		this._alert
			.confirm({
				title: '¿Seguro que desea actualizar?',
				icon: 'question',
				showCancelButton: true,
				showConfirmButton: true,
				cancelButtonText: 'Cancelar',
				confirmButtonText: 'Confirmar',
			})
			.then((response) => {
				if (!response.isConfirmed) {
					return;
				}
				this._http
					.put('/config/version/update', JSON.stringify(data))
					.subscribe((res: any) => {
						if (res.versionData) {
							this.listVersions();
							this.fnModal('hide', 'New');
							this.versionData.platform = '';
							this.versionData.version = '';
							this.versionData.compilation = null;
							this.versionData.publishedAt = '';
							this.versionData.isRequired = false;
						}
					});
			});
	};

	changeStatus = (version: string, platform: string) => {
		const data = {
			version,
			platform,
		};
		console.log(data);
		this._http
			.put('/config/version/setversion', JSON.stringify(data))
			.subscribe((res: any) => {
				this.listVersions();
			});
	};
}
