<?php
/**
 * Child theme functions
 * User: P.D. Rittenhouse
 */


//Include Composer Autoload
require_once(  __DIR__ . '/vendor/autoload.php' );

//Initialize Timber
$timber = new Timber\Timber();

/**
 * Timber Error handling
 */

if ( ! class_exists( 'Timber' ) ) {
    add_action( 'admin_notices', function() {
        echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url( admin_url( 'plugins.php#timber' ) ) . '">' . esc_url( admin_url( 'plugins.php' ) ) . '</a></p></div>';
    });

    add_filter('template_include', function( $template ) {
        return get_stylesheet_directory() . '/static/no-timber.html';
    });

    return;
}

/**
 * Sets the directories (inside your theme) to find .twig files
 */
Timber::$locations = array(
  __DIR__.'/src/templates/',
  __DIR__.'/src/patternlab/source/_patterns/',
  __DIR__.'/dist/wp/img/'
);

/**
 * By default, Timber does NOT autoescape values. Want to enable Twig's autoescape?
 * No prob! Just set this value to true
 */
Timber::$autoescape = false;


/**
 * Include settings from /src/functions
*/
$dream_includes = array(
  "config.php",
  "styles.php",
  "scripts.php",
  "paths.php",
  "vars.php",
  "data.php",
  "filters.php"
);

foreach($dream_includes as $inc){
  include_once(get_stylesheet_directory() . "/src/functions/$inc");
}
