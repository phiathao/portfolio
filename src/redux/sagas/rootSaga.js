import { call, put as dispatch, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* fetchProject(){
    try{
        const projectList = yield call(axios.get, '/api/projects');
        yield dispatch({type: 'SET_PROJECTS'})
    }catch(error){
        console.log(error)
    }
}

function* rootSaga() {
    yield takeEvery('FETCH_PROJECTS', fetchProject);
}

export default rootSaga;
