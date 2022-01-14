import React, { useEffect, useReducer } from "react";
import { Empty } from "../definitions";
import Body, { Entry } from "./Body";

type State = {
    state: "initial" | "done";
    dataset: Entry[];
};

type Action = {
    type: "fail" | "update";
    dataset: Entry[];
};

const reducer: React.Reducer<State, Action> = (
    _prevState: State,
    action: Action
): State => {
    switch (action.type) {
        case "fail":
        // fallthrough
        case "update":
            return { state: "done", dataset: action.dataset };
        default:
            throw new Error(`unrecognized action: ${action}`);
    }
};

const initialState: State = {
    state: "initial",
    dataset: [],
};

const BodyContainer: React.FC = (
    _props: Empty,
    _context?: unknown
): React.ReactElement => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(dispatch);

    useEffect(() => {
        // Fetch balances ONLY IF this is the
        // first time component is rendered.
        if (state.state !== "initial") {
            return;
        }

        const url = "http://localhost:8000/api/nodes";

        fetch(url, {
            headers: {
                Accept: "application/json",
            },
        })
            // Turn into text.
            .then((resp: Response): Promise<Entry[]> => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error(
                        `status=${resp.status} statusText=${resp.statusText}`
                    );
                }
            })

            // Use result.
            .then((entries: Entry[]) => {
                dispatch({
                    type: "update",
                    dataset: entries,
                });
            });
    });

    return <Body entries={state.dataset} />;
};

export default BodyContainer;
