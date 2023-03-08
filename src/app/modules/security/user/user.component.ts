import { Component, OnInit } from '@angular/core';
import { EventType } from 'src/app/core/constants/events';
import { FilterPipe } from 'src/app/core/pipes/filter.pipe';
import { EventService } from 'src/app/core/service/event.service';
import { HttpService } from 'src/app/core/service/http.service';
import { SweetAlertService } from 'src/app/core/service/sweet-alert.service';
declare var $: any;
@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
	listUsersBase: any = [];
	users: any = [];
	p: number = 1;
	items: any[] = [];
	userDetail: any = {
		experience: 0,
		playerName: 'Julio',
		registrationDate: 1678155144644,
		avatar: 'https://models.readyplayer.me/64069e145167081fc2ee5fe0.glb',
		currentHouse: {
			houseName: 'Colonial House',
			houseType: 'Colonial',
			landId: 'C034F4F6D858BD64CE51EEF0',
		},
		contact: {
			phone: {
				verified: true,
				data: '+573023349342',
				uid: 'CiuLcbO6Z3MCkwAJloO2iHzys8Z2',
			},
			email: {
				verified: false,
				data: 'yesidsamir1992@hotmail.com',
			},
		},
		userName: 'Julio',
		email: 'yesidsamir1992@hotmail.com',
		habytatLevel: 'WHITE',
		emailVerified: false,
		accountStatus: 'ACTIVE',
		coints: 100,
		id: 'HU5B5AAB1D329BA80C2C93C9AA',
	};
	filtertext: string = '';
	platform: string = '';
	actionModal: string = '';
	constructor(
		private _http: HttpService,
		private eventService: EventService,
		private _filter: FilterPipe,
		private _alert: SweetAlertService
	) {}

	ngOnInit(): void {
		this.eventService.broadcast(EventType.CHANGE_PAGE_TITLE, {
			title: 'Users',
			breadCrumbItems: [
				{ label: 'Apps', path: '.' },
				{ label: 'Security/Users', path: '.', active: true },
			],
		});
		this.listUsers();
	}

	async listUsers() {
		this._http.get('/user', true).subscribe((res: any) => {
			this.listUsersBase = res.Items;
			this.users = this.listUsersBase;
		});
	}

	filter(filtertext: string) {
		this.users = this._filter.transform(this.listUsersBase, filtertext, [
			'tittle',
			'website',
			'publishedAt',
		]);
	}

	fnModal(action: string, item?: any): void {
		$('#modalUser').modal(action);
	}

	parseAvatar = (avatar: string) => {
		const info = avatar.split('.glb');
		console.log(info[0] + '.png');
		return info[0] + '.png';
	};

	getDetail = (id: string) => {
		this._http.get('/user/info/by?id=' + id, true).subscribe((res: any) => {
			// debugger;
			this.userDetail = res;
			this.fnModal('show');

			const viewer: any = document.getElementById('viewer');
			viewer.innerHTML = `<model-viewer
				alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
				src="https://modelviewer.dev/shared-assets/models/Astronaut.glb" ar environment-image="https://modelviewer.dev/shared-assets/environments/moon_1k.hdr"
				poster="https://modelviewer.dev/shared-assets/models/NeilArmstrong.webp" shadow-intensity="1"
				camera-controls touch-action="pan-y"></model-viewer>`;
		});
	};

	changeStatus({ id }: any): void {
		if (!id) {
			this._alert.notify({
				titleText: 'Error al momento de actualizar el usuario',
				icon: 'error',
			});

			return;
		}

		this._alert
			.confirm({
				title: '¿Seguro que desea actualizar el estado?',
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
			});
	}
}
