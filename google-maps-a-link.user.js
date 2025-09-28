// ==UserScript==
// @name        Add extra a links on Google Maps
// @namespace   https://github.com/gslin/google-maps-a-link
// @match       https://www.google.com/maps*
// @grant       none
// @version     0.20250928.0
// @author      Gea-Suan Lin <gslin@gslin.com>
// @description Add extra "a" link for button + data-href on Google Maps
// ==/UserScript==
(() => {
  'use strict';

  const ob = new window.MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        node.querySelectorAll('button[data-href]').forEach(el => {
          if (el.nextElementSibling?.tagName?.toLowerCase() === 'a') {
            return;
          }
          const link = document.createElement('a');
          link.innerHTML = 'Link';
          link.setAttribute('href', el.getAttribute('data-href'));
          el.insertAdjacentElement('afterend', link);
        });
      });
    });
  });

  ob.observe(document, {
    childList: true,
    subtree: true,
  });
})();
