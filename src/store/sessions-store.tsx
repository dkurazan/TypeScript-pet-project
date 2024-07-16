import { createContext, ReactNode, useContext, useReducer } from "react";

export type SessionItem = {
    id: string;
    title: string;
    summary: string;
    description: string;
    date: string;
    image: string;
    duration: number;
};

type SessionState = {
    items: SessionItem[];
};

interface SessionContextValue extends SessionState {
    addSession: (session: SessionItem) => void;
    removeSession: (sessionId: string) => void;
}

type SessionContextProviderProps = {
    children: ReactNode;
};

type AddSessionAction = {
    type: "ADD_SESSION";
    session: SessionItem;
};

type RemoveSessionAction = {
    type: "REMOVE_SESSION";
    sessionId: string;
};

type SessionsAction = AddSessionAction | RemoveSessionAction;

const initialState: SessionState = {
    items: [],
};

export const SessionContext = createContext<SessionContextValue | null>(null);

export function useSessionsContext() {
    const context = useContext(SessionContext);

    if (!context) {
        throw new Error(
            "useSessionsContext must be used within a SessionsContextProvider"
        );
    }

    return context;
}

const reducerFn = (
    state: SessionState,
    action: SessionsAction
): SessionState => {
    if (action.type === "ADD_SESSION") {
        if (state.items.some((item) => item.id === action.session.id)) {
            return state;
        } else {
            return {
                items: [...state.items, { ...action.session }],
            };
        }
    }

    if (action.type === "REMOVE_SESSION") {
        const newState = state.items.filter(
            (item) => item.id !== action.sessionId
        );

        return {
            items: [...newState],
        };
    }

    return state;
};

export default function SessionContextProvider({
    children,
}: SessionContextProviderProps) {
    const [state, dispatch] = useReducer(reducerFn, initialState);

    const context = {
        items: state.items,
        addSession: (session: SessionItem) => {
            dispatch({
                type: "ADD_SESSION",
                session,
            });
        },
        removeSession: (sessionId: string) => {
            dispatch({
                type: "REMOVE_SESSION",
                sessionId,
            });
        },
    };

    return (
        <SessionContext.Provider value={context}>
            {children}
        </SessionContext.Provider>
    );
}
