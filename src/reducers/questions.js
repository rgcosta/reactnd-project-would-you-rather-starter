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
                [action.answer.qid]: {
                    ...state[action.answer.qid],
                    [action.answer.optionAnswer]: action.answer.optionAnswer === 'optionOne'
                        ? {
                            ...state[action.answer.qid].optionOne,
                            'votes': state[action.answer.qid].optionOne.votes.concat([action.answer.authUser])
                        }
                        : {
                            ...state[action.answer.qid].optionTwo,
                            'votes': state[action.answer.qid].optionTwo.votes.concat([action.answer.authUser])
                        }
                }
            }
        default:
            return state;
    }
}