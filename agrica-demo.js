import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-radio-button/paper-radio-button.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js'
import '@polymer/paper-button/paper-button.js';


class AgricaDemo extends PolymerElement {
    static get template() {
        return html`
     <style>
      :host {
        display:block;
        border: 1px black;
        background: silver;
        padding: 10px ;
        color:darkblue;
      }
    </style>

     <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
      <app-toolbar><h1>MENU</h1></app-toolbar> 
      <h1>Edition de [[data.name]]</h1>
      <paper-input label="Nom" value="{{data.name}}" auto-validate pattern="[a-zA-Z]*" error-message="letters only!" char-counter maxlength="10" ></paper-input>
      <paper-input  label="Descritption" value="{{data.description}}" auto-validate  required char-counter></paper-input>
      <paper-button on-click="handleSave" disabled="[[!dirty]]">Save</paper-button> 
      <paper-button on-click="handleDelete" >Delete</paper-button> 
    `;
    }

    static get properties() {
        return {
            dirty: {
                type:Boolean,
                value: false,
            },
            data: {
                type: Object,
                notify: true,
                value: function () {
                    return {
                        name: "",
                        description: "",
                    }
                },
            }
        };
    }

    static get observers() {
        return [
            // Observer method name, followed by a list of dependencies, in parenthesis
            'userListChanged(data.name)',
            'userListChanged(data.description)'
        ]
    }
    ready() {
        super.ready();
        this.dirty = false;
    }

    userListChanged(e) {
        console.log("Data change ", e);
        this.dirty = true;

    }
    handleSave() {
        console.log("need to save ", this.data);
        this.dispatchEvent(new CustomEvent('add-app', {detail: {
            data: {...this.data}
        }}));
        this.data = {
            name: '',
            description: ''
        }
        this.dirty = false;
    }

    handleDelete() {
        this.data = {
            name: '',
            description: ''
        }
        this.dirty = false;
    }

}

customElements.define('agrica-demo', AgricaDemo);


