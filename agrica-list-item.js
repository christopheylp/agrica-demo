import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-item.js';


import './agrica-demo.js';
import './agrica-app.js';
import './agrica-list-app.js';

/**
 * `agrica-app`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class AgricaListItem extends PolymerElement {
    static get template() {
        return html`
      <style>
        :host {
        font-style:  inherit;
        display:block;
        background: whitesmoke;
        padding: 5px ;
        color:midnightblue;
        --paper-listbox-background-color:whitesmoke;
        --paper-listbox-color:midnightblue;
        }
      </style>
      <table><tr>
            <td width=30%><paper-listbox attr-for-selected="item-name" selected="{{item.name}}" fallback-selection="{{item.name}}">
                <paper-item  item-name="{{item.name}}">[[item.name]]</paper-item></td>
                <td width=70%><paper-item  item-name="{{item.description}}">[[item.description]]</paper-item>
            </paper-listbox></td>
      </td></table>
            

    `;
    }

    static get properties() {
        return {
            item: {
                type: Object,
                readonly: true
            }
        };
    }

}


window.customElements.define('agrica-list-item', AgricaListItem);
