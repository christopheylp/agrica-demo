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
          display: block;
        }
      </style>
            <paper-listbox attr-for-selected="item-name" selected="{{item.name}}" fallback-selection="None">
            <paper-item item-name="{{item.name}}">1</paper-item>
            <paper-item item-name="{{item.name}}">2[[item.name]]</paper-item>
            <p>Description:[[item.description]]</p>
            </paper-listbox>

      <!--<h2>[[item.name]]</h2>-->
      <!--<h3>[[item.description]]</h3>-->
    `;
  }

    static get properties() {
        return {
            item: {
                type: Object,
                readonly:true
            }
        };
    }


  }


window.customElements.define('agrica-list-item', AgricaListItem);
