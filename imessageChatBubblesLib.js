// Import CSS

let linkCSS = document.createElement("link");
let DOMhead = document.querySelector("head");

linkCSS.href = "imessageChatBubblesLibJS/css/style.css";
linkCSS.type = "text/css";
linkCSS.rel = "stylesheet";

document.head.insertBefore(linkCSS, document.head.firstChild);

// Adaptive tails

let imcblSend = document.querySelector(".imcbl-send");
let imcblReceive = document.querySelector(".imcbl-receive");

function getNumPx(elem) {
	let elem_fz_raw = window.getComputedStyle(elem).fontSize;
	let elem_fz_pxIndex = elem_fz_raw.indexOf("px");

	let elem_fz = Number(elem_fz_raw.slice(0, elem_fz_pxIndex));
	
	return elem_fz;
}

function chanceTail(elem) {
	let mesFZ = getNumPx(elem);

	switch (mesFZ) {
		case 20:
			elem.classList.toggle("tail-w19");
			console.log("ok");
			break;
		case 15:
			elem.classList.toggle("tail-w18");
			break;
		case 13:
			elem.classList.toggle("tail-w17");
			break;
		case 11:
			elem.classList.toggle("tail-w16");
			break;
		case 10:
			elem.classList.toggle("tail-w15");
			break;
	}

	if (mesFZ <= 9) elem.classList.add("tail-w14");

	// location.reload();
}

document.addEventListener("DOMContentLoaded", chanceTail(imcblSend));
// imcblSend.addEventListener(, chanceTail(imcblSend));
imcblReceive.addEventListener("DOMContentLoaded", chanceTail(imcblReceive));
// document.addEventListener("orientationchange", chanceTail(imcblReceive));