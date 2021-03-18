/**
 * button
 */

import $ from 'jquery';

// Module styles
import './_button.scss';

export const name = 'button';

const buttonEnable = () => {
  // Find our component within the DOM
  const $button = $('.button');

  // Bail if component does not exist
  if (!$button.length) {
    return;
  }

  // An example of what could be done with this component
  $button.map((i, button)=> {
    $(button).addClass('js-button-exists');
    return $button;
  });
};

$(document).ready(() => {
  buttonEnable();
});

export default buttonEnable;
