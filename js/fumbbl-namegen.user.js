// ==UserScript==
// @name         NameGen Button Addon
// @namespace    http://roante.github.io/fumbbl-namegen/
// @version      1.0
// @description  Adds a random name generator button to the Buy Player sceen
// @author       Roante
// @match        https://fumbbl.com/FUMBBL.php?page=buy_player*
// @require      https://rawgit.com/roante/fumbbl-namegen/gh-pages/js/fumbbl-namegen.js
// @require      http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $('form').after('<button id="randomizeNameButton" type="button">Randomize name</button>');

    document.getElementById("randomizeNameButton").addEventListener ("click", randomizeNameAction);

    function randomizeNameAction() {
        setName(generateNewPlayerName())
    }
})();
