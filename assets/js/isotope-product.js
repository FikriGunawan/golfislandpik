/* 
=========================================================================================================
																				ISOTOP FILTER
=========================================================================================================
*/
	// PRODUCT
		$(document).ready(function() {
			// init Isotope
			var $grid = $('.isotope').isotope({
				itemSelector: '.element-item'
			});
			// store filter for each group
			var filters = {};
			$('.filters').on( 'click', '.button', function( event ) {
				var $button = $( event.currentTarget );
				// get group key
				var $buttonGroup = $button.parents('.button-group');
				var filterGroup = $buttonGroup.attr('data-filter-group');
				// set filter for group
				filters[ filterGroup ] = $button.attr('data-filter');
				// combine filters
				var filterValue = concatValues( filters );
				// set filter for Isotope
				$grid.isotope({ filter: filterValue });
				loadMore(initShow);
				counter = initShow;
			});
			// change is-checked class on buttons
			$('.button-group').each( function( i, buttonGroup ) {
				var $buttonGroup = $( buttonGroup );
				$buttonGroup.on( 'click', 'button', function( event ) {
					$buttonGroup.find('.is-checked').removeClass('is-checked');
					var $button = $( event.currentTarget );
					$button.addClass('is-checked');
				});
			});				
			// flatten object by concatting values
			function concatValues( obj ) {
				var value = '';
				for ( var prop in obj ) {
					value += obj[ prop ];
				}
				return value;
			}
			// Isotope Load more button
			var initShow = 8; //number of items loaded on init & onclick load more button
			var counter = initShow; //counter for load more button
			//var iso = $grid.data('isotope'); // get Isotope instance
			var iso = $grid.data('isotope');
  		loadMore(initShow); //execute function onload
			function loadMore(toShow) {
				$grid.find(".hidden").removeClass("hidden");
    		var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
      		return item.element;
    		});
    		$(hiddenElems).addClass('hidden');
    		$grid.isotope('layout');
    		//when no more to load, hide show more button
    		if (hiddenElems.length == 0) {
	      	jQuery("#load-more").hide();
    		} else {
	      	jQuery("#load-more").show();
    		};
  		}
  		//append load more button
  		$grid.after('<div class="col-lg-12 my-lg-5 text-center"><button id="load-more" class="btnLightGreen">Load More</button></div>');
  		//when load more button clicked
  		$("#load-more").click(function() {
    		if ($('#filters').data('clicked')) {
	      	//when filter button clicked, set initial value for counter
      		counter = initShow;
      		$('#filters').data('clicked', false);
    		} else {
	      	counter = counter;
    		};
    		counter = counter + initShow;
    		loadMore(counter);
  		});
  		//when filter button clicked
  		$("#filters").click(function() {
    		$(this).data('clicked', true);
    		loadMore(initShow);
  		});
		});