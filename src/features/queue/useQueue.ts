import { useReducer, useEffect } from "react";

import { Queue } from "./types";

enum ACTIONS {
  INIT,
  SUCCESS,
  FAIL,
}

type Action = {
  type: ACTIONS;
  payload?: any;
};

type State = {
  data: Queue | null;
  isLoading: boolean;
  errors: any;
};

const reducer = <State>(state: State, action: Action) => {
  switch (action.type) {
    case ACTIONS.INIT:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case ACTIONS.SUCCESS:
      return {
        isLoading: false,
        error: null,
        data: action.payload,
      };

    case ACTIONS.FAIL:
      return {
        isLoading: false,
        error: action.payload,
        data: null,
      };

    default:
      return state;
  }
};

const initialState: State = {
  data: null,
  errors: null,
  isLoading: false,
};

const useQueue = (qid: string) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: ACTIONS.INIT });
    fetch(`/api/queues/${qid}`)
      .then((res) => {
        if (res.status != 200) {
          res.json().then((data) => {
            dispatch({ type: ACTIONS.FAIL, payload: data });
          });
        } else {
          res.json().then((data) => {
            dispatch({ type: ACTIONS.SUCCESS, payload: data });
          });
        }
      })
      .catch((error) => dispatch({ type: ACTIONS.FAIL, payload: error }));
  }, [qid]);

  return { ...(state as State) };
};

export default useQueue;
