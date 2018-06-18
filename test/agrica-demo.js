import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import  '@polymer/paper-input/paper-input.js';

/**
 * `agrica-demo`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class AgricaDemo extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <paper-input label="Mon champ" value="{{prop1}}"></paper-input>
      <h2>Hello [[prop1]]!</h2>
      <h2>Bou [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'agrica-demo',
      },
    };
  }
}

window.customElements.define('agrica-demo', AgricaDemo);
