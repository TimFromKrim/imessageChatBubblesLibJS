// Import CSS

let linkCSS = document.createElement("link");
let DOMhead = document.querySelector("head");

linkCSS.href = "imessageChatBubblesLibJS/css/style.css";
linkCSS.type = "text/css";
linkCSS.rel = "stylesheet";

document.head.insertBefore(linkCSS, document.head.firstChild);

// Adaptive tails

let imcblSendSingle = document.querySelector(".imcbl-send");
let imcblSend = document.querySelectorAll(".imcbl-send");
let imcblReceive = document.querySelectorAll(".imcbl-receive");

// Get fz
function getNumPx(elem) {
	let elem_fz_raw = window.getComputedStyle(elem).fontSize;
	let elem_fz_pxIndex = elem_fz_raw.indexOf("px");

	let elem_fz = Number(elem_fz_raw.slice(0, elem_fz_pxIndex));
	
	return elem_fz;
}

function chanceTailSend() {
	imcblSend.forEach((el) => {
		// el.style.backgroundColor = 'yellow';
		let mesFZ = getNumPx(imcblSendSingle);

		if (mesFZ <= 20 && mesFZ > 15) {
			el.classList.toggle("tail-w19");
			console.log("ok");
		} else if (mesFZ <= 15 && mesFZ > 13) {
			el.classList.toggle("tail-w18");
		} else if (mesFZ <= 13 && mesFZ > 11) {
			el.classList.toggle("tail-w17");
		} else if (mesFZ <= 11 && mesFZ > 10) {
			el.classList.toggle("tail-w16");
		} else if (mesFZ <= 10) {
			el.classList.toggle("tail-w15");
		}

		if (mesFZ <= 9) elem.classList.add("tail-w14");
	});
}

function chanceTailReceive() {
	imcblReceive.forEach((el) => {
		// el.style.backgroundColor = 'yellow';
		let mesFZ = getNumPx(imcblSendSingle);

		if (mesFZ <= 20 && mesFZ > 15) {
			el.classList.toggle("tail-w19");
			console.log("ok");
		} else if (mesFZ <= 15 && mesFZ > 13) {
			el.classList.toggle("tail-w18");
		} else if (mesFZ <= 13 && mesFZ > 11) {
			el.classList.toggle("tail-w17");
		} else if (mesFZ <= 11 && mesFZ > 10) {
			el.classList.toggle("tail-w16");
		} else if (mesFZ <= 10) {
			el.classList.toggle("tail-w15");
		}

		if (mesFZ <= 9) el.classList.add("tail-w14");
	});
}

function chanceTails() {
	setTimeout(function() {
		chanceTailSend();
		chanceTailReceive();
	}, 1000);
}

document.addEventListener("DOMContentLoaded", chanceTails());
