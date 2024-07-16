import { type SessionItem } from "../../store/sessions-store";
import { useSessionsContext } from "../../store/sessions-store";
import Button from "../UI/Button";

type UpcommingSessionProps = {
    session: SessionItem;
};

export default function UpcomingSession({ session }: UpcommingSessionProps) {
    const { removeSession } = useSessionsContext();

    const onCancel = () => {
        removeSession(session.id);
    };

    return (
        <article className="upcoming-session">
            <div>
                <h3>{session.title}</h3>
                <p>{session.summary}</p>
                <time dateTime={new Date(session.date).toISOString()}>
                    {new Date(session.date).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                    })}
                </time>
            </div>
            <p className="actions">
                <Button textOnly onClick={onCancel}>
                    Cancel
                </Button>
            </p>
        </article>
    );
}
