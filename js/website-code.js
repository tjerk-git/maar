var $ = jQuery.noConflict();

$(document).ready((function(e) {

	$('.profile_bubble').click(function(){
		$('.pop_over').show();

		setTimeout(function(){
			$('.pop_up').fadeIn(0.2);
		}, 5000);
	});


	gsap.registerPlugin(ScrollTrigger);

		let box = document.querySelector(".panel-4");
    let forest = document.querySelector(".panel-7");

		ScrollTrigger.create({
	  	start: 0,
	  	end: "max",
	  	onUpdate: updateValues
		});

	function updateValues() {

	  if(ScrollTrigger.isInViewport(box)) {
			setTimeout(function(){
		  		//$('.pop_up').fadeIn(0.2);
          $(box).addClass('hue');
	  		}, 2000);
	  }

    if(ScrollTrigger.isInViewport(forest)) {
      setTimeout(function(){
          var sound = new Howl({
              src: ['../sound/forest.mp3']
            });

          sound.play();
        }, 2000);
    }
	}

	updateValues();
}));
