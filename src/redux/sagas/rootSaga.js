import { call, put as dispatch, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* fetchProjects(){
    try{
        const projectList = yield call(axios.get, '/api/projects');
        yield dispatch({type: 'SET_PROJECTS', payload: projectList})
    }catch(error){
        console.log(error);
    }
}
function* fetchTags(){
    try{
        const tagsList = yield call(axios.get, '/api/projects/tags');
        yield dispatch({type: 'SET_TAGS', payload: tagsList});
    }catch(error){
        console.log(error);
    }
}

function* addProject(action){
    try{
        console.log(action.payload);
        yield call(axios.post, '/api/projects', action.payload)
    }catch(error){
        console.log(error);
    }
}

function* rootSaga() {
    yield takeEvery('FETCH_PROJECTS', fetchProjects);
    yield takeEvery('FETCH_TAGS', fetchTags);
    yield takeEvery('ADD_PROJECT', addProject);
}

export default rootSaga;
