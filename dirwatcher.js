import { EventEmitter } from 'events';
import * as fs from 'fs';

class DirWatcher extends EventEmitter {
    constructor() {
        super();
        console.log('DirWatcher module');
    }

    watch(path, delay) {
        let that = this;
        setTimeout(function () {
            fs.watch(path, function (event, filename) {
                if (event != null) {
                    that.emit('dirwatcher:changed', event, filename);
                }
            });
        }, delay);
    }
}

export default DirWatcher;
