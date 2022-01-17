import React, { useEffect, useReducer } from "react";
import { Empty } from "../definitions";
import Body from "./Body";
import { Post } from "./types";

type Dataset = Post[];

type State = {
    state: "initial" | "done";
    dataset: Dataset;
};

type Action = {
    type: "fail" | "update";
    dataset: Dataset;
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

const BodyContainer: React.FC = (
    _props: Empty,
    _context?: unknown
): React.ReactElement => {
    const initialState: State = {
        state: "initial",
        dataset: [],
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        // Fetch balances ONLY IF this is the first time component is rendered.
        if (state.state !== "initial") {
            return;
        }

        const url = "http://localhost:8000/api/nodes";
        const requestInit = {
            headers: {
                Accept: "application/json",
            },
        };

        fetch(url, requestInit)
            // Parse into an object.
            .then((resp: Response): Promise<Dataset> => {
                if (resp.ok) {
                    // TODO: Optionally I can inspect the data structure here and make sure it's actually good.
                    return resp.json();
                } else {
                    throw new Error(
                        `status=${resp.status} statusText=${resp.statusText}`
                    );
                }
            })
            // Use result.
            .then((dataset: Dataset) => {
                dispatch({
                    type: "update",
                    dataset: dataset,
                });
            });
    });

    return <Body entries={state.dataset} />;
};

export default BodyContainer;
