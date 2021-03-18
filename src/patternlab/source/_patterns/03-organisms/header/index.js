/**
 * header
 */

import $ from 'jquery';

// Module styles
import './_header.scss';

export const name = 'header';

const headerEnable = () => {
  // Find our component within the DOM
  const $header = $('.header');

  // Bail if component does not exist
  if (!$header.length) {
    return;
  }

  // An example of what could be done with this component
  $header.map((i, header)=> {
    $(header).addClass('js-header-exists');
    return $header;
  });
};

const navToggleClass = () => {
  const {body} = document;
  const nav = document.getElementById('siteNav');

  // Toggle open class on body
  $(nav).on('shown.bs.collapse', () => {
    body.classList.add('nav-open');
  });
  $(nav).on('hidden.bs.collapse', () => {
    body.classList.remove('nav-open');
  });
};

$(document).ready(() => {
  headerEnable();
  navToggleClass();
});

export default headerEnable;
