import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {

    sendShowParagraph;

    showParagraph(event) {
        this.sendShowParagraph = event.detail;
    }
}