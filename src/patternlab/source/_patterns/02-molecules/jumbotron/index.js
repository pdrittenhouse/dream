/**
 * jumbotron
 */

import $ from 'jquery';

// Module styles
import './_jumbotron.scss';

export const name = 'jumbotron';

const jumbotronEnable = () => {
  // Find our component within the DOM
  const $jumbotron = $('.jumbotron');

  // Bail if component does not exist
  if (!$jumbotron.length) {
    return;
  }

  // An example of what could be done with this component
  $jumbotron.map((i, jumbotron)=> {
    $(jumbotron).addClass('js-jumbotron-exists');
    return $jumbotron;
  });
};

$(document).ready(() => {
  jumbotronEnable();
});

export default jumbotronEnable;
