import { LightningElement} from 'lwc';

export default class ChildA extends LightningElement {

    handleChange(event) {
        const check = event.target.checked;
        this.dispatchEvent(new CustomEvent('show', {detail: check}));
    }
}