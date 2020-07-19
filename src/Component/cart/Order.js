import {useState, useEffect} from 'react';
import EventEmitter from 'events';

const EVENT = 'ORDER_CHANGED';
let order = {};
const emitter = new EventEmitter();

export const addOrder = (index) => {
    if (index in order){
        order[index] = order[index] + 1;
    }else{
        order[index] = 1;
    }

    emitter.emit(EVENT, order);
}

export const removeOrder = (index) => {
    if (index in order){
        delete order[index];
    }else{
        console.error('No item with index');
    }

    emitter.emit(EVENT, order);
}

export const useOrder = () => {
    const [value, setValue] = useState(order);

    useEffect(() => {
        const listener = (order) => setValue(order);
        emitter.on(EVENT, listener);
        return () => emitter.removeListener(EVENT, listener);
    });

    return value;
}