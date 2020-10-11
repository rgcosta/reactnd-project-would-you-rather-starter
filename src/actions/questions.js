import * as API from '../util/_DATA';
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ANSWER_QUESTION = 'ADD_QUESTION';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion({optionOneText, optionTwoText}, history) {
    return (dispatch, getState) => {
        const { authUser } = getState();

        dispatch(showLoading());

        return API._saveQuestion({
            optionOneText,
            optionTwoText,
            author: authUser
        }).then((question) => dispatch(addQuestion(question)))
            .then(() => dispatch(hideLoading()))
            .then(() => history.push('/'));
    }
}
