import {wrapStore} from 'react-chrome-redux';

const store; // a normal Redux store

wrapStore(store, {portName: 'PUSH_ME_AROUND'}); // make sure portName matches
