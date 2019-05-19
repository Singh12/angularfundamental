function Stopwatch() {
	let duration=0;
	let startTime=0;
	let endTime = 0;
	let runningTime = 0;
	this.start= function() {
		if(runningTime)
			throw new Error("Time is allready running");
		runningTime = true
		startTime = new Date;
	};
    this.stop= function() {
    	if(!runningTime)
    		throw new Error("Time is not running");
    	runningTime = false;
		endTime = new Date;
		const second = (endTime.getTime() - startTime.getTime())/1000;
		duration += second;

	};
	this.reset= function() {
		runningTime = false;
		duration = 0;
		endTime =0;
		startTime = 0;
	};

	Object.defineProperty(this,'duration', {
		get: function() { return duration; }
	});
	

}

