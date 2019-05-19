// We have two type of variable 
// referance type and primitive type

// vlaue type or primitive type -> number, string, symbole, boolean, undefind, null
// Referance type -> Object and function

function Stopwatch() {
    duration = 0;
    check = false;
    startTime = 0;
    endTime = 0;
    this.start = function() {
        if(!check) {
            check = true;
            startTime = new Date();
        } else {
            throw new Error('Timer is running');
        }
    }
    this.stop = function() {
        if(check){
            check = false;
            endTime = new Date();           
            const time = (endTime.getTime() - startTime.getTime())/1000;
            duration += time;
        } else {
            throw new Error('Timer already stop');
        }
        
    }
    this.reset = function() {
        duration = 0;
    }
    Object.defineProperty(this,'duration', {
        get: function() {
            return duration;
        },
    });
}

const sw = new Stopwatch() 