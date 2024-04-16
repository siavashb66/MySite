// Select the placeholder element
const copyrightPlaceholder = document.querySelector(".copyright");

// HTML code to inject
const copyrightHTML = `<p><a property="dct:title" rel="cc:attributionURL" href="https://bakhtiarnia.com">bakhtiarnia.com</a> © 2024 by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://bakhtiarnia.com">Siavash Bakhtiarnia</a> is licensed under <a href="http://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-ND 4.0<img alt="Creative Commons License" width="22" height="22" style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img alt="Creative Commons Attribution license" width="22" height="22" style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img alt="Creative Commons NonCommercial license" width="22" height="22" style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"><img alt="Creative Commons NoDerivatives license" width="22" height="22" style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1"></a></p>
`;

// Inject the HTML code into the placeholder
copyrightPlaceholder.innerHTML = copyrightHTML;
