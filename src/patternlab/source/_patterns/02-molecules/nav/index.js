/**
 * nav
 */

import $ from 'jquery';

// Module styles
import './_nav.scss';

export const name = 'nav';

const navEnable = () => {
  // Find our component within the DOM
  const $nav = $('.nav');

  // Bail if component does not exist
  if (!$nav.length) {
    return;
  }

  // An example of what could be done with this component
  $nav.map((i, nav)=> {
    $(nav).addClass('js-nav-exists');
    return $nav;
  });
};

// Override default Bootstrap menu behavior
const hoverDropdown = () => {

  // Close All Menus
  const hideAllMenus = () => {
    const openNavMenus = [].slice.call( document.querySelectorAll('.dropdown-hover .dropdown-menu.show') );
    const openNavLinks = [].slice.call( document.querySelectorAll('.dropdown-hover .dropdown-toggle[aria-expanded="true"]') );
    if (openNavMenus.length) {
      openNavMenus.forEach(menu => {
        menu.classList.remove('show');
      });
    }
    if (openNavLinks.length) {
      openNavLinks.forEach(link => {
        link.setAttribute('aria-expanded', 'false');
      });
    }
  };

  // Toggle dropdown menus
  const dropdowns = [].slice.call( document.getElementsByClassName('dropdown-hover') );
  if (dropdowns.length) {
    dropdowns.forEach(dropdown => {

      const links = [].slice.call( dropdown.getElementsByClassName('dropdown-toggle') );
      if (links !== null) {
        links.forEach(link => {
          const linkCaret = link.querySelector('.caret');
          const linkDropdown = link.parentElement;
          const linkMenu = linkDropdown.querySelector('.dropdown-menu');
          // const linkOpenMenus = linkDropdown.parentElement.getElementsByClassName('show');
          // const linkOpenMenuToggles = linkDropdown.parentElement.querySelectorAll('.dropdown-toggle[aria-expanded="true"]');
          const showMenu = () => {
            link.setAttribute('aria-expanded', 'true');
            linkMenu.classList.add('show');
          };
          const hideMenu = () => {
            link.setAttribute('aria-expanded', 'false');
            linkMenu.classList.remove('show');
          };
          const toggleMenu = () => {
            if (linkMenu.classList.contains('show')) {
              hideMenu();
            } else {
              showMenu();
            }
          };
          // const hideOpenMenus = () => {
          //   console.log(linkOpenMenus);
          //   if (linkOpenMenus.length) {
          //     linkOpenMenus.forEach(menu => {
          //       menu.classList.remove('show');
          //     });
          //   }
          // };

          link.addEventListener('click', e => {
            // Stop clicks inside a dropdown menu from toggling dropdown
            e.stopPropagation();

            // Enable link
            const url = link.getAttribute('href');
            window.location = url;
          });

          if (linkCaret !== null) {
            linkCaret.addEventListener('click', e => {
              // Prevent caret from activating link
              e.preventDefault();
              e.stopImmediatePropagation();

              // Hide open menus
              // hideOpenMenus();

              // Toggle dropdown when caret clicked
              toggleMenu();
            });
          }

        });
      }

    });
  }

  // Close Menus on click outside
  const {body} = document;
  body.addEventListener('click', () => {
    hideAllMenus();
  });
};

$(document).ready(() => {
  navEnable();
  // dropdownHover();
  hoverDropdown();
});

export default navEnable;
