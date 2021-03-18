/**
 * footer
 */

import $ from 'jquery';

// Module styles
import './_footer.scss';

export const name = 'footer';

const footerEnable = () => {
  // Find our component within the DOM
  const $footer = $('.footer');

  // Bail if component does not exist
  if (!$footer.length) {
    return;
  }

  // An example of what could be done with this component
  $footer.map((i, footer)=> {
    $(footer).addClass('js-footer-exists');
    return $footer;
  });
};

$(document).ready(() => {
  footerEnable();
});

export default footerEnable;
