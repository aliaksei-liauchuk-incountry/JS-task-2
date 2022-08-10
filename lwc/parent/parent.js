import { LightningElement } from 'lwc';
export default class Parent extends LightningElement {
	startShowParagraph;

	showParagraph(event) {
		this.startShowParagraph = event.detail;
	}
}