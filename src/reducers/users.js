import { RECEIVE_USERS } from "../actions/users";
import { ADD_QUESTION, ANSWER_QUESTION } from "../actions/questions";

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    'questions': state[action.question.author].questions.concat([action.question.id])
                }
            }
        case ANSWER_QUESTION:
            return {
                ...state,
                [action.answer.authUser]: {
                    ...state[action.answer.authUser],
                    'answers': {
                        ...state[action.answer.authUser].answers,
                        [action.answer.qid]: action.answer.optionAnswer
                    }
                }
            }
        default:
            return state;
    }
}