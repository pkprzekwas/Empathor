import * as types from './../actions/actionTypes';


export default function movieReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_MOVIE:
        return [...state,
          Object.assign({}, action.movie)
        ];

    default:
      return state;
  }
}
