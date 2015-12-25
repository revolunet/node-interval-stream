
import { Stream } from 'stream';

export default function getIntervalStream({count=10, delay=200} = {}) {

    let stream = new Stream;

    stream.readable = true;

    let current = 0;

    function send() {
        if (current <= count ) {
            stream.emit('data', (new Date()).getTime());
            current++;
            if (delay) {
                setTimeout(send, delay)
            }
        } else {
            stream.emit(null);
            stream.emit('end');
        }
    }

    send();

    return stream;
}
