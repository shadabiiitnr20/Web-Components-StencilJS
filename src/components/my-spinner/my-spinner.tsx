import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-spinner',
  styleUrl: './my-spinner.css',
  shadow: true,
})
export class Spinner {
  render() {
    return (
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}
