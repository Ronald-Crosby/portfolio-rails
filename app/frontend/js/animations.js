document.addEventListener('DOMContentLoaded', function () {
	console.log('animation.js is working')

	const container = document.querySelector('.js-draw')

	var params = { width: 300, height: 300 };
	var two = new Two(params).appendTo(container);

	two.update();
})
