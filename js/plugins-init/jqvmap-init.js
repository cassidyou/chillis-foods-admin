(function($) {
    "use strict" 


 var dlabVectorMap = function(){
	
	var screenWidth = $(window).width();
	
	var handleWorldMap = function(trigger = 'load'){
		var vmapSelector = $('#world-map');
		var visitorData = {
			"us": 1000,
			"ca": 750,
			"gb": 500,
			"ng": 30,
			"gh": 500
		}

		if(trigger == 'resize')
		{
			vmapSelector.empty();
			vmapSelector.removeAttr('style');
		}
		
		vmapSelector.delay( 500 ).unbind().vectorMap({ 
			map: 'world_en',
			backgroundColor: 'transparent',
			borderColor: 'rgb(239, 242, 244)',
			borderOpacity: 0.25,
			borderWidth: 1,
			color: 'rgb(239, 242, 244)',
			enableZoom: true,
			hoverColor: '#ED3237',
			hoverOpacity: null,
			normalizeFunction: 'linear',
			scaleColors: ['#b6d6ff', '#005ace'],
			selectedColor: '#A5CC3B',
			selectedRegions: Object.keys(visitorData),
			showTooltip: true,
			showLabel: true,
			values: visitorData,
			normalizeFunction: 'polynomial',
			onLabelShow: function (event, label, code) {
				if (visitorData[code] == undefined) {
					visitorData[code] = 0;
				}
				label.append(' Visitors: ' + visitorData[code]);
			},
			onRegionClick: function(element, code, region)
			{
				var message = 'You clicked "'
					+ region
					+ '" which has the code: '
					+ code.toUpperCase();
		 
				alert(message);
			}
		});
	}
	
	// var handleUsaMap = function(trigger = 'load'){
	// 	var vmapSelector = $('#usa');
	// 	if(trigger == 'resize')
	// 	{
	// 		vmapSelector.empty();
	// 		vmapSelector.removeAttr('style');
	// 	}
		
	// 	vmapSelector.delay(500).unbind().vectorMap({ 
	// 		map: 'usa_en',
	// 		backgroundColor: 'transparent',
	// 		borderColor: 'rgb(239, 242, 244)',
	// 		borderOpacity: 0.25,
	// 		borderWidth: 1,
	// 		color: 'rgb(239, 242, 244)',
	// 		enableZoom: true,
	// 		hoverColor: 'rgba(47, 76, 221, 0.9)',
	// 		hoverOpacity: null,
	// 		normalizeFunction: 'linear',
	// 		scaleColors: ['#b6d6ff', '#005ace'],
	// 		selectedColor: 'rgba(47, 76, 221, 0.9)',
	// 		selectedRegions: null,
	// 		showTooltip: true,
	// 		onRegionClick: function(element, code, region)
	// 		{
	// 			var message = 'You clicked "'
	// 				+ region
	// 				+ '" which has the code: '
	// 				+ code.toUpperCase();
		 
	// 			alert(message);
	// 		}
	// 	});
	// }
	
		return {
			init:function(){
			},
			
			
			load:function(){
				handleWorldMap();
				// handleUsaMap();
			},
			
			resize:function(){
				handleWorldMap('resize');
				handleUsaMap('resize');
			}
		}
	
	}();

	jQuery(document).ready(function(){
	});
		
	jQuery(window).on('load',function(){
		setTimeout(function(){
			dlabVectorMap.load();
		}, 1000); 
		
	});

	jQuery(window).on('resize',function(){
		setTimeout(function(){
			dlabVectorMap.resize();
		}, 1000); 
		
	});     

})(jQuery);	