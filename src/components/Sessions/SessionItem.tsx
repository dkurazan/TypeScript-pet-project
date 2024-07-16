import Button from "../UI/Button";

type SessionItemProps = {
    session: {
        id: string;
        title: string;
        summary: string;
        image: string;
    };
};

export default function SessionItem({ session }: SessionItemProps) {
    return (
        <div className="session-item">
            <img src={session.image} alt={session.title} />
            <div className="session-data">
                <h3>{session.title}</h3>
                <p>{session.summary}</p>
                <div className="actions">
                    <Button to={session.id}>Learn More</Button>
                </div>
            </div>
        </div>
    );
}
