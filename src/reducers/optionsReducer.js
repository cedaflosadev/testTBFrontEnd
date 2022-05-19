
import { types } from '../types/types';
// {
//     id: new Date().getTime(),
//     title: 'Cumpleaños del jefe',
//     start: moment().toDate(),
//     end: moment().add(2, 'hours').toDate(),
//     notes: 'Comprar el pastel',
//     user: {
//         _id: '123',
//         name: 'Fernando'
//     }
// }
const initialState =
{
    options: [],
    activeEvent: null
}

export const optionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.optionsLoaded:
            return {
                ...state,
                options: [...action.payload]
            }

        default:
            return state;
    }
}