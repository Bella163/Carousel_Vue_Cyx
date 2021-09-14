class EventEmitter {
    constructor() {
        this.eventMap = {}
    }
    on(type,cb) {
        if(!this.eventMap[type]) {
            this.eventMap[type] = [cb]
        } else {
            this.eventMap[type].push(cb)
        }
    }
    emit(type,...args) {
        if(!this.eventMap[type]) {
            this.eventMap[type] &&this.eventMap[type].forEach(fn => {
                fn.apply(this,args)
            });
        }

    }
    off(type) {
        if(this.eventMap[type]) {
            this.eventMap[type] = [];
        }
    }
    once(type,cb) {
        if(!this.eventMap[type]) {
            this.eventMap[type] = [cb]
        }
    }
}