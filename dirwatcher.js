import { resolve } from "dns";
const EventEmitter = require('events');

class DirWatcher {
    constructor() {
        console.log("DirWatcher module");
    }

    watch(path,delay,importer) {
        
        const fs = require('fs');

        setTimeout(function(){
            fs.watch(path,function(event,filename){
                if (event != null) {
                    const emitter = new EventEmitter();
                    const logging = () => {console.log('File was changed. Event: ' + event + ' Filename: ' + filename)};
                    emitter.on('changed',logging);
                    emitter.on('changed',() => {
                        importer.import(path).then(resolve);
                    });
                    emitter.emit('changed');
                }
            });
        },delay);
        
    }
}

export default DirWatcher;
