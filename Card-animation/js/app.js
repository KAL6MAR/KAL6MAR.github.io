document.addEventListener('DOMContentLoaded', () => {

const body = document.querySelector('body')
	cx = window.innerWidth / 2
	cy = window.innerHeight / 2


	body.addEventListener('mousemove', e =>{

		clientX = e.pageX
		clientY = e.pageY


		request = requestAnimationFrame(updateMe)
	})

	function updateMe(){
		dx = clientX - cx
		dy = clientY - cy
		tiledx = dx / cx
		tiledy = dy / cy 
		radius = Math.sqrt(Math.pow(tiledx, 2) + Math.pow(tiledy, 2))
		degree = radius * 12
		gsap.to('.content', 1, {transform: `rotate3d(${tiledx}, ${tiledy}, 0, ${degree}deg)` })
	}
	
})
