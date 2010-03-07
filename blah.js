(function(){
	
	var defaultOptions = {
		gauge: {
			renderTo : "",
			radius	: 100,
			borderColor: '#000',
			borderWidth: 0
		},
		name: "defaultname",
		id: 5,
		age: 20
	};
	
	function Gauge(options){
		
		var gauge = this;
		
		function init(options){
			defaultOptions = $.extend(defaultOptions,options);
			console.log("you initialized");
			console.log("You passed in options:", options);
		}

		gauge.getContainer = function(){
			renderTo = optionsChart.renderTo;
		};
		
		gauge.getOptions = function(){
			return defaultOptions;
		};
		
		init(options);		
	};
	
	// Global var
	if (typeof(Zero) == 'undefined'){
		Zero = {};
	}
	
	Zero.gauge = Gauge;
})();

// var GaugePrototype = {
// 	init: function(args){
// 		console.log("you're in init()");
// 		console.log("default options", this.defaultOptions);
// 	}
// };
// 
// Gauge.prototype = GaugePrototype;
