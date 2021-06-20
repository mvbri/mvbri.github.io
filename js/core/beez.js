/**
 * Beez
 * @page Core
 * @author mfyance
 */
"use strict"

/**
 * Copyright
 * @component Date
 * @description Obtener fecha actual
 */
const d = new Date();
const n = d.getFullYear();
document.getElementsByTagName("date")[0].innerHTML = n;


