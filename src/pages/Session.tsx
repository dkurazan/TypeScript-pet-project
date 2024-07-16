import { useState } from "react";
import { useParams } from "react-router-dom";
import { SESSIONS } from "../dummy-sessions.ts";
import BookSession from "../components/Sessions/BookSession.tsx";
import Button from "../components/UI/Button.tsx";

export default function SessionPage() {
    const [showBookSession, setShowBookSession] = useState<boolean>(false);
    const params = useParams<{ id: string }>();

    const sessionId = params.id;
    const loadedSession = SESSIONS.find((session) => session.id === sessionId);

    const handleShowBookSession = () => {
        setShowBookSession(true);
    };

    const handleCloseBookSession = () => {
        setShowBookSession(false);
    };

    if (!loadedSession) {
        return (
            <main id="session-page">
                <p>No session found!</p>
            </main>
        );
    }

    return (
        <main id="session-page">
            <article>
                <header>
                    <img src={loadedSession.image} alt={loadedSession.title} />
                    <div>
                        <h2>{loadedSession.title}</h2>
                        <time
                            dateTime={new Date(
                                loadedSession.date
                            ).toISOString()}
                        >
                            {new Date(loadedSession.date).toLocaleDateString(
                                "en-US",
                                {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                }
                            )}
                        </time>
                        <p>
                            <Button onClick={handleShowBookSession}>
                                Book Session
                            </Button>
                        </p>
                    </div>
                </header>
                <p id="content">{loadedSession.description}</p>
            </article>
            <BookSession modalState={showBookSession} closeModal={handleCloseBookSession} currSession={loadedSession} />
        </main>
    );
}
