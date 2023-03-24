// ==UserScript==
// @name        schoology skip link confirmation
// @namespace   Violentmonkey Scripts
// @match       https://schoology.example.com/link
// @grant       none
// @version     1.0
// @author      java
// @description 3/23/2023, 8:16:58 PM
// ==/UserScript==

document.getElementsByClassName('s-extlink-direct')[0].click();
