// the store should: 
// 	make a store 
//	read its initial state
//  dispatch action
//	witness changed state

import { Map, fromJS } from 'immutable';
import { expect } from 'chai';

import makeStore from '../src/store';