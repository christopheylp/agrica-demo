import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

import './agrica-demo.js';
import './agrica-list-app.js';

/**
 * `agrica-app`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class AgricaApp extends PolymerElement {
    static get template() {
        return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <agrica-demo on-add-app="handleSaveEvent" ></agrica-demo>
      <agrica-list-app apps="[[apps]]"></agrica-list-app>
    `;
    }

    static get properties() {
        return {
            apps: {
                type: Array,
                value: function () {
                    return [
                        {name: "Titre:", description: "Description:"},
                    ]
                },
            },
        };
    }

    handleSaveEvent(e) {
        const data = e.detail.data;
        this.push('apps', data);
    }
}

window.customElements.define('agrica-app', AgricaApp);
