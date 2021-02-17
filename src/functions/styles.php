<?php

function dream_enqueue_styles() {

    //Enqueue Styles
    wp_enqueue_style( 'styles', get_stylesheet_directory_uri() . '/dist/wp/css/dream.css', array(), '1.0.0', 'all' );

}

if ( !is_admin() ) {
    add_action( 'wp_enqueue_scripts', 'dream_enqueue_styles' );
}
