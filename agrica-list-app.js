import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-radio-button/paper-radio-button.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/iron-list/iron-list.js'
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-progress/paper-progress.js';
import '@polymer/paper-button/paper-button.js';

import './agrica-app.js';
import './agrica-list-item.js';

/**
 * `liste`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
 class AgricaListApp extends PolymerElement {
    static get is() { return 'agrica-list-app'; }
    static get template() {
        return html`
     <style>
      :host { border-bottom-color:;
        display:block;
        color:dimgray;
      }
    </style>
    <h3>Liste des notes: [[alala]]</h3>
    <template is="dom-repeat" items="{{apps}}" mutable-data>
      <agrica-list-item item="[[item]]"></agrica-list-item>
    </template>
    `;
    }

    static get properties() {
        return {
            apps: {
                type: Array
            },
            alala: {
                type: String,
                computed: "myComputedValueAll()"
            },
        };
    }

     myComputedValueAll() {
        return "";
    }
}

customElements.define('agrica-list-app', AgricaListApp);
