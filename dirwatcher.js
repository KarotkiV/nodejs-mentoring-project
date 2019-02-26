import { resolve } from 'dns';
import {EventEmitter} from 'events';
import * as fs from 'fs';

const logging = (event,filename) => console.log('File was changed. Event: ' + event + ' Filename: ' + filename);

class DirWatcher extends EventEmitter{
    constructor() {
        super();
        console.log("DirWatcher module");
    }

    watch(path,delay) {

        setTimeout(function(){
            fs.watch(path,function(event,filename){
                this.on('changed',() => logging(event,filename));
                if (event != null) {
                    this.emit('changed');
                }
            });
        },delay);  
    }
}

export default DirWatcher;
