import { LightningElement} from 'lwc';
export default class ChildA extends LightningElement {

	handleChange(e) {
		const check = e.target.checked;
		this.dispatchEvent(new CustomEvent('show', {detail: check}));
	}
}