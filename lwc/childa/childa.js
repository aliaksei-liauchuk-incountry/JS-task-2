import { LightningElement } from 'lwc';
export default class ChildA extends LightningElement {
	value = [''];

	get options() {
		return [ 
			{label: 'Show paragraph', value: 'option'},
		];
	}

	handleChange(e) {
		this.value = e.detail.value;
		this.dispatchEvent(new CustomEvent('show'));
	}
}