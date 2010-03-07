(function(){
	
	var defaultFont = 'normal 12px "Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',
	defaultOptions = {
		gauge: {
			renderTo : "",
			radius	: 100,
			borderColor: '#000',
			borderWidth: 0
		},
		title: {
			text: "zeroMeter Gauge",
			style: {
				textAlign: 'center',
				color: '#3E576F',
				font: defaultFont.replace('12px', '16px'),
				margin: '10px 0 0 0'
			}			
		},
		name: "defaultname",
		id: 5,
		age: 20
	};
	
	function Gauge(options){
		
		// Private members
		var gauge = this,
			optionsGauge = options.gauge;
		
		function init(options){
			defaultOptions = $.extend(true,defaultOptions,options);
		}
		
		function render(){
			renderTo = optionsGauge.renderTo;
		}

		// Public members
		gauge.getContainer = function(){
			renderTo = optionsGauge.renderTo;
		};
		
		gauge.getOptions = function(){
			return defaultOptions;
		};
		
		// Initialize Gauge
		init(options);		
	};
	
	// Global var
	if (typeof(Zero) == 'undefined'){
		Zero = {};
	}
	
	Zero.gauge = Gauge;
})();
