import { Component, OnInit } from '@angular/core';
import { EventType } from 'src/app/core/constants/events';
import { FilterPipe } from 'src/app/core/pipes/filter.pipe';
import { EventService } from 'src/app/core/service/event.service';
import { HttpService } from 'src/app/core/service/http.service';
import { SweetAlertService } from 'src/app/core/service/sweet-alert.service';
declare var $: any;
@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
	p: number = 1;
	tag: string = '';
	newsList: any[] = [];
	newsListBase: any[] = [];
	items: any[] = [];
	newsData: any = {
		id: '',
		tittle: '',
		summary: '',
		details: '',
		tags: [],
		externalLink: '',
		publicationDate: '',
		previewImage: '',
		enabled: true,
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
			title: 'Comunications - News',
			breadCrumbItems: [
				{ label: 'Settings', path: '.' },
				{ label: 'Settings/News', path: '.', active: true },
			],
		});
		this.listNews();
		this.listNewsDate();
	}

	fnModal(action: string, operation: string, item?: any): void {
		this.actionModal = operation;
		if (operation == 'Update') {
			//let date = new Date(item?.publicationDate * 1000);
			this.newsData = {
				id: item?.id,
				tittle: item?.tittle,
				summary: item?.summary,
				details: item?.details,
				tags: item?.tags,
				externalLink: item?.externalLink,
				publicationDate: item.publicationDate,
				previewImage: item?.previewImage,
				enabled: item?.enabled,
			};
		} else {
			this.newsData = {
				id: '',
				tittle: '',
				summary: '',
				details: '',
				tags: [],
				externalLink: '',
				publicationDate: '',
				previewImage: '',
				enabled: false,
			};
		}
		this.tag = '';
		$('#modalNews').modal(action);
	}

	listNews = () => {
		this._http.get('/news', true).subscribe((res: any) => {
			this.newsListBase = res;
			this.newsList = this.newsListBase;
		});
	};

	listNewsDate = () => {
		this._http
			.get('/news/bydate/06-03-2023', true)
			.subscribe((res: any) => {
				console.log(res);
			});
	};

	filter(filtertext: string) {
		this.newsList = this._filter.transform(this.newsListBase, filtertext, [
			'tittle',
			'summary',
			'publicationDate',
		]);
	}

	limitTo = (value: string, limit: number) => {
		let trail = '...';
		return value.length > limit ? value.substring(0, limit) + trail : value;
	};

	addTag = () => {
		if (this.newsData.tags.find((x: any) => x === this.tag)) {
			return;
		}
		this.newsData.tags.push(this.tag);
		this.tag = '';
	};

	createNews = () => {
		//console.table(this.versionData);
		//const time = new Date(this.newsData.publicationDate).getTime();
		const data = {
			tittle: this.newsData?.tittle,
			summary: this.newsData?.summary,
			details: this.newsData?.details || 'x',
			tags: this.newsData?.tags,
			externalLink: this.newsData?.externalLink,
			publicationDate: this.newsData.publicationDate,
			previewImage: this.newsData?.previewImage || 'x',
			enabled: true,
		};

		if (Object.values(data).some((element) => !element)) {
			this._alert.notify({
				titleText: 'Ingrese todos los campos solicitados',
				icon: 'warning',
			});
			return;
		}

		data.previewImage = '';
		data.details = '';

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
					.post('/news', JSON.stringify(data))
					.subscribe((res: any) => {
						this.listNews();
						this.fnModal('hide', 'New');
						this.newsData.id = '';
						this.newsData.tittle = '';
						this.newsData.summary = '';
						this.newsData.details = '';
						this.newsData.tags = [];
						this.newsData.externalLink = '';
						this.newsData.publicationDate = '';
						this.newsData.previewImage = '';
						this.newsData.enabled = true;
					});
			});
	};

	updateNews = () => {
		//const time = new Date(this.newsData.publicationDate).getTime();
		const data = {
			tittle: this.newsData?.tittle,
			summary: this.newsData?.summary,
			details: this.newsData?.details,
			tags: this.newsData?.tags,
			externalLink: this.newsData?.externalLink,
			publicationDate: this.newsData?.publicationDate,
			previewImage: this.newsData?.previewImage,
			enabled: this.newsData?.enabled,
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
					.patch('/news/' + this.newsData.id, JSON.stringify(data))
					.subscribe((res: any) => {
						this.listNews();
						this.fnModal('hide', 'New');
						this.newsData.id = '';
						this.newsData.tittle = '';
						this.newsData.summary = '';
						this.newsData.details = '';
						this.newsData.tags = [];
						this.newsData.externalLink = '';
						this.newsData.publicationDate = '';
						this.newsData.previewImage = '';
						this.newsData.enabled = true;
					});
			});
	};
}

/**
 *
 activar o desactivar
 ultimas noticia (traer noticias de la fecha de publicacion a la actual)
 ajustar crear
 fecha de publicacion - formato: añomesdia 20230228
 imgpreview
 urlredireccionamiento
 */
