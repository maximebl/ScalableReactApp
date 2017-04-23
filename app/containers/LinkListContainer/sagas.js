// import { take, call, put, select } from 'redux-saga/effects';
import {call} from 'redux-saga/effects';
import {takeLatest} from 'redux-saga';
import {SELECT_TOPIC} from '../NavigationContainer/constants';

function fetchLinksFromServer(topic){
  return fetch('http://localhost:3000/api/topics/${topic.name}/links')
  .then(response=>response.json());
}

function* fetchLinks(action){
  try{
    const links = yield call(fetchLinksFromServer, action.topic);
    console.log('links from server: ', links);
  } catch(e){

  }
}

// Individual exports for testing
export function* defaultSaga() {
  yield* takeLatest(SELECT_TOPIC, fetchLinks);
}

// All sagas to be loaded
export default [
  defaultSaga,
];
