
        $(document).ready(function(){
			// $('[data-toggle="tooltip"]').tooltip(); // permet d'activer la mise en forme info bulle
			//
			$("#mycarousel").carousel( { interval: 2000 } );

		   $("#carouselButton").click(function(){
				if ($("#carouselButton").children("span").hasClass('fa-pause')) {
					$("#mycarousel").carousel('pause');
					$("#carouselButton").children("span").removeClass('fa-pause');
					$("#carouselButton").children("span").addClass('fa-play');
				}
				else if ($("#carouselButton").children("span").hasClass('fa-play')){
					$("#mycarousel").carousel('cycle');
					$("#carouselButton").children("span").removeClass('fa-play');
					$("#carouselButton").children("span").addClass('fa-pause'); 
					// interval is in milliseconds. 1000 = 1 second -> so 1000 * 10 = 10 seconds
					/*
					$('#mycarousel').removeAttr("data-interval");
					//$('#mycarousel').attr("data-interval", "3000");
					$('#mycarousel').carousel({
					  interval: 1000 * 3
					});
					*/
				}			
			});

			$('#loginClick').click( function (e) {
			  // do something...
			  
			  $('#loginModal').modal('show');
			});
			$('#reserveClick').click( function (e) {
			  // do something...
			  
			  $('#ReserveModal').modal('show');
			});
			
		});