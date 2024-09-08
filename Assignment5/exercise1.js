class Meditation  {
    constructor(duration){
        this.duration = duration;       
    }

    start(){
        console.log(`Start meditation`);
        let counter = this.duration;       
        const intervalId = setInterval(() => {
            if(counter>0){
                console.log(counter);
                counter --;
            }else{
                clearInterval(intervalId);
                console.log("Jay Guru Dev");
            }

        
    },1000);
    }
}

const morning_meditation = new Meditation(5);
morning_meditation.start();

