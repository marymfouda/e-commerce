import { createStore } from 'redux';
import rootRedusers from './reducer';

const store = createStore(rootRedusers);

export default store;