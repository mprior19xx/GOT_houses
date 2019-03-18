// JAVASCRIPT FILE
(() => {
	console.log('hi there');
	//
	//variable stack
	//grab sheilds at bottom of the page
	const shields = document.querySelectorAll('.sigil-container'),
		lightBox = document.querySelector('.lightbox'),
		video = document.querySelector('video'),
		closeLB = document.querySelector('.lightbox-close'),
		banners = document.querySelector('#houseImages');

	function showLightbox(){
		//grab the right video source
		//debugger;
		//get the lowercase house name from the class list
		let targetHouse = this.className.split(" ") [1];

		//make the names match
		//stark becomes Stark => first make capital S, then add rest of word
		let targetSrc = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);

		video.src = `video/House-${targetSrc}.mp4`;

		lightBox.classList.add('show-lightbox');
		//play video when box opened
		video.play();
	}

	function hideLightbox(){
		lightBox.classList.remove('show-lightbox');
		//rewind the video and pause it
		video.currentTime = 0;
		video.pause();
	}

	function animateBanner(){
		const offset = 600; //The width of one image

		totalOffset = this.dataset.offset * offset + "px"; //finding the proper pixel value to display matching image
		banners.style.right = totalOffset; 

		showLightbox();
	}

	// shields.forEach(shield => shield.addEventListener('click', showLightbox));
	shields.forEach(shield => shield.addEventListener('click', animateBanner));

	video.addEventListener('ended', hideLightbox);

	closeLB.addEventListener('click', hideLightbox);
	//
})();