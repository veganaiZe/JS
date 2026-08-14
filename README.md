<img alt="JS" src="https://github.com/user-attachments/assets/54328c3b-0d27-4494-a1db-90e9188a6159" width="48px" />

_A list of resources primarily for classical Javascript ≤ ES 5.1 — its best era!_

## Style

* [Vanilla JS](http://vanilla-js.com/)
* [Guidelines for styling JavaScript code examples](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript) - Mozilla
* [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html) ([_oldest snapshot_](http://web.archive.org/web/20161126025850id_/https://google.github.io/styleguide/jsguide.html))
* [Closure Linter](https://github.com/google/closure-linter) - ES5


## Books

* [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/README.md) (1st Edition)
  - [Up & Going](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/up%20&%20going/README.md#you-dont-know-js-up--going)
  - [Scope & Closures](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20&%20closures/README.md#you-dont-know-js-scope--closures)
  - [this & Object Prototypes](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20&%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes)
  - [Types & Grammar](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20&%20grammar/README.md#you-dont-know-js-types--grammar)
  - [Async & Performance](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20&%20performance/README.md#you-dont-know-js-async--performance)
  - [ES6 & Beyond](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20&%20beyond/README.md#you-dont-know-js-es6--beyond)
* [Functional-Light JavaScript](https://github.com/getify/Functional-Light-JS)
* [Eloquent Javascript](https://eloquentjavascript.net/2nd_edition/) (2nd Edition)
* [Javascript Succinctly](https://s3.amazonaws.com/ebooks.syncfusion.com/downloads/JavaScript_Succinctly/JavaScript_Succinctly.pdf) (pdf) ([epub](https://s3.amazonaws.com/ebooks.syncfusion.com/downloads/JavaScript_Succinctly/JavaScript_Succinctly.epub)) ([mobi](https://s3.amazonaws.com/ebooks.syncfusion.com/downloads/JavaScript_Succinctly/JavaScript_Succinctly.mobi)) ([github](https://github.com/SyncfusionSuccinctlyE-Books/JavaScript-Succinctly))
* [Javascript Wikibook](https://en.wikibooks.org/wiki/JavaScript)


## Resources

* w3schools
  - [js tutorial](https://www.w3schools.com/js/default.asp)
  - [js reference](https://www.w3schools.com/jsref/default.asp)
* mdn _([offline markdown](https://github.com/mdn/content))_
  - [js tutorial](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting)
  - [js](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
    - [js guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
    - [js reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
* freecodecamp
  - [js dsa tutorials](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) _(original version!)_
* codecademy
  - [js reference](https://www.codecademy.com/resources/docs/javascript)


## Tools

* DEVTOOLS
  - [`console`](https://developer.mozilla.org/en-US/docs/Web/API/console) - mdn
    - [`console.assert()`](https://developer.mozilla.org/en-US/docs/Web/API/console/assert_static)
    - [`console.log()`](https://developer.mozilla.org/en-US/docs/Web/API/console/log_static)
  - [Browser Developer Console](https://blog.teamtreehouse.com/mastering-developer-tools-console) - treehouse
  - [Chromium Dev Tools](https://developer.chrome.com/docs/devtools/)
    - [keyboard shortcuts](https://developer.chrome.com/docs/devtools/shortcuts/)
    - [debug javascript](https://developer.chrome.com/docs/devtools/javascript/) [[youtube](https://youtu.be/H0XScE08hy8)]
    - [run snippets](https://developer.chrome.com/docs/devtools/javascript/snippets/) [[youtube](https://youtu.be/zW9ibQbYJNE)]
  - [Firefox Dev Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
    - [keyboard shortcuts](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html)
    - [web console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
    - [mozilla's command line options](https://www-archive.mozilla.org/docs/command-line-args.html) - 2003-2005
    - [firefox/commandlineoptions](https://wiki.mozilla.org/Firefox/CommandLineOptions) - mozilla wiki
    - `firefox.exe -h | more` <-- Pipe required for Windows because of bug.
    - `firefox.exe -P dev --new-instance --devtools --private-window`
    - `about:config`
    ```
    devtools.cache.disabled                   = true
    devtools.webconsole.persistlog            = true
    devtools.editor.tabsize                   = 4
    devtools.theme                            = dark
    devtools.chrome.enabled                   = true
    devtools.editor.autocomplete              = false
    devtools.editor.autoclosebrackets         = false
    devtools.webconsole.input.autocomplete    = false
    devtools.webconsole.input.eagerEvaluation = false
    ```
* [JSDOC](https://jsdoc.app/)
  - [jsdoc](https://github.com/jsdoc/jsdoc) - github
* TRANSPILERS
  - [Closure Compiler](https://developers.google.com/closure/compiler) ([github](https://github.com/google/closure-compiler))
  - [Traceur Compiler](https://github.com/google/traceur-compiler) - ES6 to ES5 transpiler


## Techniques

* AJAX - Asynchronous Javascript And Xml
  - [Ajax: A New Approach to Web Applications](http://web.archive.org/web/20170809043416id_/https://immagic.com/eLibrary/ARCHIVES/GENERAL/ADTVPATH/A050218G.pdf)
  - [Wikipedia](https://en.wikipedia.org/wiki/Ajax_(programming))
* IIFE - Immediately Invoked Function Expression
  - [Alman](https://web.archive.org/web/20101118035434id_/http://benalman.com/news/2010/11/immediately-invoked-function-expression/)
  - [MDN](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)
  - [Wikipedia](https://en.wikipedia.org/wiki/Immediately_invoked_function_expression)
* UNICODE
  - [What every JavaScript developer should know about Unicode](https://dmitripavlutin.com/what-every-javascript-developer-should-know-about-unicode/)
  - [UTF-16 characters, Unicode code points, and grapheme clusters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) - mdn
  - [UTF-16](https://en.wikipedia.org/wiki/UTF-16) - wikipedia


## Standards / Conventions

* Netscape
  - ___JS 1.0___ - 1995 - _Netscape 2.0[^1]_
    - [JavaScript Authoring Guide](https://web.archive.org/web/19970613234917id_/http://home.netscape.com/eng/mozilla/2.0/handbook/javascript/index.html)
([_updated_](https://minimum-viable-product.github.io/js-1.0-handbook/))
  - ___JS 1.1___ - 1996 - _Netscape 3.0[^2]_
    - [New in JavaScript 1.1](https://udn.realityripple.com/docs/Archive/Web/JavaScript/New_in_JavaScript/1.1.html) - mdn
    - [JavaScript Guide](https://web.archive.org/web/19970614042441id_/http://home.netscape.com/eng/mozilla/3.0/handbook/javascript/index.html)
  - ___JS 1.2___ - 1997 - _Netscape 4.0-4.05[^3]_
    - [New in JavaScript 1.2](https://udn.realityripple.com/docs/Archive/Web/JavaScript/New_in_JavaScript/1.2.html) - mdn
    - [JavaScript 1.2 Events](https://web.archive.org/web/19990417223104id_/http://developer.netscape.com/docs/technote/javascript/eventhandler/eventhandler.htm) - devedge
    - [JavaScript Guide](https://web.archive.org/web/19981206151821id_/http://developer.netscape.com/docs/manuals/communicator/jsguide4/index.htm)
    - [JavaScript Reference](https://web.archive.org/web/19990420172150id_/http://developer.netscape.com/docs/manuals/communicator/jsref/index.htm)
  - ___JS 1.3___ - 1998 - _Netscape 4.06[^4] - 4.79[^5]_
    - _ES1 Compliant_
    - [New in JavaScript 1.3](https://udn.realityripple.com/docs/Archive/Web/JavaScript/New_in_JavaScript/1.3.html) - mdn
    - [What's New in JavaScript 1.3](https://web.archive.org/web/20000815081640id_/http://developer.netscape.com/docs/manuals/communicator/jsref/js13.html) - devedge
    - [The JavaScript Console](https://web.archive.org/web/19990225164533id_/http://developer.netscape.com/docs/technote/jsconsole.html) - devedge
    - [Client-Side JavaScript Guide](https://web.archive.org/web/19990427055335id_/http://developer.netscape.com/docs/manuals/js/client/jsguide/index.htm)
([pdf](https://web.archive.org/web/20000818004353id_/http://developer.netscape.com/docs/manuals/js/client/jsguide/ClientGuideJS13.pdf))
([zip](https://web.archive.org/web/20000818004401id_/http://developer.netscape.com/docs/manuals/js/client/jsguide/ClientGuideJS13.zip))
    - [Client-Side JavaScript Reference](https://web.archive.org/web/19990423121049id_/http://developer.netscape.com/docs/manuals/js/client/jsref/index.htm)
([pdf](https://web.archive.org/web/20000818004411id_/http://developer.netscape.com/docs/manuals/js/client/jsref/ClientReferenceJS13.pdf))
([zip](https://web.archive.org/web/20000818004419id_/http://developer.netscape.com/docs/manuals/js/client/jsref/ClientReferenceJS13.zip))
  - ___JS 1.4___
    - [New in JavaScript 1.4](https://udn.realityripple.com/docs/Archive/Web/JavaScript/New_in_JavaScript/1.4.html) - mdn
    - [Core JavaScript Guide](https://web.archive.org/web/20000301015524id_/http://developer.netscape.com/docs/manuals/js/core/jsguide/index.htm)
([pdf](https://web.archive.org/web/20000818004517id_/http://developer.netscape.com/docs/manuals/js/core/jsguide/CoreGuideJS14.pdf))
([zip](https://web.archive.org/web/20000818004526id_/http://developer.netscape.com/docs/manuals/js/core/jsguide/CoreGuideJS14.zip))
    - [Core JavaScript Reference](https://web.archive.org/web/20000301130413id_/http://developer.netscape.com/docs/manuals/js/core/jsref/index.htm)
([pdf](https://web.archive.org/web/20000818004546id_/http://developer.netscape.com/docs/manuals/js/core/jsref/CoreReferenceJS14.pdf))
([zip](https://web.archive.org/web/20000818004552id_/http://developer.netscape.com/docs/manuals/js/core/jsref/CoreReferenceJS14.zip))
  - ___JS 1.5___ - 2000 - _Mozilla[^6] / Netscape 6[^7] / Firefox 1.0[^8]_
    - _ES3 Compliant_
    - [New in JavaScript 1.5](https://udn.realityripple.com/docs/Archive/Web/JavaScript/New_in_JavaScript/1.5.html) - mdn
    - [Core JavaScript Guide](https://web.archive.org/web/20010204031200id_/http://developer.netscape.com/docs/manuals/js/core/jsguide15/contents.html)
([zip](https://web.archive.org/web/20030919183318id_/http://devedge.netscape.com:80/library/manuals/2000/javascript/1.5/guide/CoreGuideJS15.zip))
    - [Core JavaScript Reference](https://web.archive.org/web/20010204033300id_/http://developer.netscape.com/docs/manuals/js/core/jsref15/contents.html)
([zip](https://web.archive.org/web/20030403200417id_/http://developer.netscape.com/docs/manuals/js/core/jsref15/CoreReferenceJS15.zip))
  - ___JS 1.6___ - 2005 - _Firefox 1.5[^9]_
    - [New in JavaScript 1.6](https://udn.realityripple.com/docs/Archive/Web/JavaScript/New_in_JavaScript/1.6.html) - mdn
  - ___JS 1.7___ - 2006 - _Firefox 2.0[^10]_
    - [New in JavaScript 1.7](https://udn.realityripple.com/docs/Archive/Web/JavaScript/New_in_JavaScript/1.7.html) - mdn
  - ___JS 1.8___ - 2008 - _Firefox 3.0[^11]_
    - [New in JavaScript 1.8](https://udn.realityripple.com/docs/Archive/Web/JavaScript/New_in_JavaScript/1.8.html) - mdn
  - ___JS 1.8.1___ - 2009 - _Firefox 3.5[^12]_
    - [New in JavaScript 1.8.1](https://udn.realityripple.com/docs/Archive/Web/JavaScript/New_in_JavaScript/1.8.1.html) - mdn
  - ___JS 1.8.2___ - 2010 - _Firefox 3.6[^13]_
    - _Only Minor Changes_
  - ___JS 1.8.5___ - 2011 - _Firefox 4.0[^14]_
    - _ES5 Compliant_
    - _Last JavaScript Version_
    - [New in JavaScript 1.8.5](https://udn.realityripple.com/docs/Archive/Web/JavaScript/New_in_JavaScript/1.8.5) - mdn
  - ___DHTML___ - 1997 - _Netscape 4[^3]_
    - [DHTML Explained](https://www.yourhtmlsource.com/javascript/dhtmlexplained.html)
    - [Dynamic HTML in Netscape Communicator](https://web.archive.org/web/19990423033152id_/http://developer.netscape.com/docs/manuals/communicator/dynhtml/index.htm)
    - [HTML Central](https://web.archive.org/web/20040813051149id_/http://devedge.netscape.com/central/html/)
    - [CSS Central](https://web.archive.org/web/20040926074952id_/http://devedge.netscape.com/central/css/)
    - [DOM Central](https://web.archive.org/web/20041001081429id_/http://devedge.netscape.com/central/dom/)
    - [JavaScript Style Sheets and Dynamic Fonts](https://web.archive.org/web/20030918071806id_/http://www.damsbo.com/webdev/jsss/sstoc.htm)
* [ECMA 262](https://ecma-international.org/publications-and-standards/standards/ecma-262/)
  - [ES1](https://www.ecma-international.org/wp-content/uploads/ECMA-262_1st_edition_june_1997.pdf) - 1997 (pdf only)
([_untampered original_](https://web.archive.org/web/20040716162346id_/http://developer.netscape.com/docs/javascript/e262-pdf.pdf))
  - [ES2](https://ecma-international.org/wp-content/uploads/ECMA-262_2nd_edition_august_1998.pdf) - 1998 (pdf only) - _Netscape 4[^3]_
  - [ES3](https://ecma-international.org/wp-content/uploads/ECMA-262_3rd_edition_december_1999.pdf) - 1999 (pdf only) - _Mozilla[^6] / Netscape 6[^7] / Firefox 1[^8]_
  - [ES5](https://ecma-international.org/wp-content/uploads/ECMA-262_5th_edition_december_2009.pdf) - 2009 (pdf only) -
_[Firefox 4](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/4)[^14]_
  - [ES5.1](https://262.ecma-international.org/5.1/index.html) - 2011
([pdf](https://ecma-international.org/wp-content/uploads/ECMA-262_5.1_edition_june_2011.pdf))
([annotated](https://es5.github.io/))
  - [ES6](https://262.ecma-international.org/6.0/index.html) - 2015
([pdf](https://ecma-international.org/wp-content/uploads/ECMA-262_6th_edition_june_2015.pdf)) -
_[Firefox 54](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/54)[^15]_
  - [ES.next](https://tc39.es/ecma262/multipage/) - latest


### Browser Downloads

[^1]: Netscape [2.0](https://en.wikipedia.org/wiki/Netscape_Navigator_2)2
  [[win32](https://cdn.browserarchive.org/navigator/32bit/2.02/n32e202.exe)]
  [[linux-i486](https://www.mirrorservice.org/sites/browsers.evolt.org/browsers/navigator/linuxx86/2.02/netscape-v202-export_i486-unknown-linux.tar.gz)]
[^2]: Netscape 3.04
  [[win32](https://web.archive.org/web/20020219135930id_/http://ftp.netscape.com/pub/communicator/english/3.04/windows/windows95_or_nt/navigator_gold/g32d304.exe)]
  [linux-x86](https://www.mirrorservice.org/sites/browsers.evolt.org/browsers/navigator/linuxx86/3.04/netscape-v304-export_x86-unknown-linux-elf.tar.gz)]
[^3]: Netscape 4.04
  [[win32](https://www.mirrorservice.org/sites/browsers.evolt.org/browsers/navigator/32bit/4.04/n32d404.exe)]
[^4]: Netscape 4.08
  [[win32](https://web.archive.org/web/20020527043835id_/http://ftp.netscape.com/pub/communicator/english/4.08/windows/windows95_or_nt/navigator_standalone/n32d408.exe)]
[^5]: Netscape 4.79
  [[win32](https://web.archive.org/web/20020622155649id_/http://ftp.netscape.com:80/pub/communicator/english/4.79/windows/windows95_or_nt/base_install/cb32d479.exe)]
  [[linux-x86](https://web.archive.org/web/20130422080729id_/http://aol-4.vo.llnwd.net/pub/communicator/english/4.79/unix/supported/linux22/navigator_standalone/navigator-v479-us.x86-unknown-linux2.2.tar.gz)]
[^6]: [Mozilla](https://www-archive.mozilla.org/releases/) 1.0.2
  [[win32](http://ftp.mozilla.org/pub/mozilla.org/mozilla/releases/mozilla1.0.2/mozilla-win32-1.0.2-talkback.zip)]
  [[linux-i686](http://ftp.mozilla.org/pub/mozilla.org/mozilla/releases/mozilla1.0.2/mozilla-i686-pc-linux-gnu-1.0.2.tar.gz)]
[^7]: Netscape 6.01
  [[win32](https://web.archive.org/web/20010702053004id_/http://ftp.netscape.com/pub/netscape6/english/6.01/windows/win32/sea/N6Setup.exe)]
  [[linux-i686](https://web.archive.org/web/20010720174635id_/http://ftp.netscape.com/pub/netscape6/english/6.01/unix/linux22/sea/netscape-i686-pc-linux-gnu-sea.tar.gz)]
[^8]: Firefox 1.0.8
  [[win32](https://archive.mozilla.org/pub/firefox/releases/1.0.8/win32/en-US/Firefox%20Setup%201.0.8.exe)]
  [[linux-i686](https://archive.mozilla.org/pub/firefox/releases/1.0.8/linux-i686/en-US/firefox-1.0.8.tar.gz)]
[^9]: Firefox [1.5](https://devdoc.net/web/developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/1.5.html).0.12
  [[win32](https://archive.mozilla.org/pub/firefox/releases/1.5.0.12/win32/en-US/Firefox%20Setup%201.5.0.12.exe)]
  [[linux-i686](https://archive.mozilla.org/pub/firefox/releases/1.5.0.12/linux-i686/en-US/firefox-1.5.0.12.tar.gz)]
[^10]: Firefox [2.0](https://devdoc.net/web/developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/2.html).0.20
  [[win32](https://archive.mozilla.org/pub/firefox/releases/2.0.0.20/win32/en-US/Firefox%20Setup%202.0.0.20.exe)]
  [[linux-i686](https://archive.mozilla.org/pub/firefox/releases/2.0.0.20/linux-i686/en-US/firefox-2.0.0.20.tar.gz)]
[^11]: Firefox [3.0](https://devdoc.net/web/developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/3.html).18
  [[win32](https://archive.mozilla.org/pub/firefox/releases/3.0.18/win32/en-US/Firefox%20Setup%203.0.18.exe)]
  [[linux-i686](https://archive.mozilla.org/pub/firefox/releases/3.0.18/linux-i686/en-US/firefox-3.0.18.tar.bz2)]
[^12]: Firefox [3.5](https://devdoc.net/web/developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/3.5.html).19
  [[win32](https://archive.mozilla.org/pub/firefox/releases/3.5.19/win32/en-US/Firefox%20Setup%203.5.19.exe)]
  [[linux-i686](https://archive.mozilla.org/pub/firefox/releases/3.5.19/linux-i686/en-US/firefox-3.5.19.tar.bz2)]
[^13]: Firefox [3.6](https://devdoc.net/web/developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/3.6.html).28
  [[win32](https://archive.mozilla.org/pub/firefox/releases/3.6.28/win32/en-US/Firefox%20Setup%203.6.28.exe)]
  [[linux-i686](https://archive.mozilla.org/pub/firefox/releases/3.6.28/linux-i686/en-US/firefox-3.6.28.tar.bz2)]
[^14]: Firefox [4.0](https://devdoc.net/web/developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/4.html).1
  [[win32](https://archive.mozilla.org/pub/firefox/releases/4.0.1/win32/en-US/Firefox%20Setup%204.0.1.exe)]
  [[linux-i686](https://archive.mozilla.org/pub/firefox/releases/4.0.1/linux-i686/en-US/firefox-4.0.1.tar.bz2)]
  [[linux-x86_64](https://archive.mozilla.org/pub/firefox/releases/4.0.1/linux-x86_64/en-US/firefox-4.0.1.tar.bz2)]
[^15]: Firefox 54.0.1
  [[win32](https://archive.mozilla.org/pub/firefox/releases/54.0.1/win32-EME-free/en-US/Firefox%20Setup%2054.0.1.exe)]
  [[win64](https://archive.mozilla.org/pub/firefox/releases/54.0.1/win64-EME-free/en-US/Firefox%20Setup%2054.0.1.exe)]
  [[linux-i686](https://archive.mozilla.org/pub/firefox/releases/54.0.1/linux-i686/en-US/firefox-54.0.1.tar.bz2)]
  [[linux-x86_64](https://archive.mozilla.org/pub/firefox/releases/54.0.1/linux-x86_64-EME-free/en-US/firefox-54.0.1.tar.bz2)]
