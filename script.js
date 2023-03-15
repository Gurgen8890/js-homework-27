class Clock {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
    start() {
        setInterval(() => {
            this.seconds += 1
            if (this.seconds > 59) {
                this.minutes += 1;
                this.seconds -= 60;
                if (this.minutes > 59) {
                    this.hours += 1;
                    this.minutes -= 60;
                    if (this.hours > 23) {
                        this.hours -= 24                     
                    }
                }
            }
        }, 1000)

    };
    setAlert(hours, minutes, seconds) {
        return new Promise((resolv) => {
            setTimeout(() => {
                resolv()
            }, ((hours - this.hours) * 60 * 60 * 1000) + ((minutes - this.minutes) * 60 * 1000) + ((seconds - this.seconds) * 1000))

        })
    };
    setAlert1(hours, minutes, seconds) {
        return new Promise((resolv, reject) => {
            setTimeout(() => {
                reject(new Error())
            }, ((hours - this.hours) * 60 * 60 * 1000) + ((minutes - this.minutes) * 60 * 1000) + ((seconds - this.seconds) * 1000))

        })
    };

}


let clock = new Clock(15, 05, 30);

console.log(clock);

clock.start()


clock.setAlert(15, 05, 35).then(() => {
    console.log('WAKE UP');
});

clock.setAlert1(15, 05, 40).catch((error) => {
    console.log(error, 'YOU ARE LATE');
});                                     // second@ mot em drel irar vor shut poxi setAlert@ u setAlert1@ shat spasenq poxvelun          




