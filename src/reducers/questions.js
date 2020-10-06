import {
    RECEIVE_QUESTIONS,
    ADD_QUESTION,
    ANSWER_QUESTION
} from "../actions/questions";

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            }
        case ANSWER_QUESTION:
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: action.answer === 'optionOne'
                        ? state[action.qid].optionOne.votes.concat([action.authUser])
                        : state[action.qid].optionTwo.votes.concat([action.authUser])
                }
            }
        default:
            return state;
    }
}