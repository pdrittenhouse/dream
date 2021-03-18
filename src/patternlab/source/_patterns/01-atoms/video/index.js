/**
 * video
 */

import $ from 'jquery';

// Module styles
import './_video.scss';

export const name = 'video';

const videoEnable = () => {
  // Find our component within the DOM
  const $video = $('.video');

  // Bail if component does not exist
  if (!$video.length) {
    return;
  }

  // An example of what could be done with this component
  $video.map((i, video)=> {
    $(video).addClass('js-video-exists');
    return $video;
  });
};

$(document).ready(() => {
  videoEnable();
});

export default videoEnable;
