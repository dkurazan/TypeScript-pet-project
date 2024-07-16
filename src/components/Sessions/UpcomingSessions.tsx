import Modal from "../UI/Modal";
import Button from "../UI/Button";
import { useSessionsContext } from "../../store/sessions-store";
import UpcomingSession from "./UpcomingSession";

type UpcommingSessionsProps = {
    modalState: boolean;
    closeModal: () => void;
};

export default function UpcomingSessions({
    modalState,
    closeModal,
}: UpcommingSessionsProps) {
    const { items } = useSessionsContext();

    return (
        <Modal open={modalState} onClose={closeModal}>
            <h2>{items.length > 0 ? 'Upcoming Sessions' : 'There is no active Upcoming Sessions'}</h2>
            {items.length > 0 && (
                <ul>
                    {items.map((item) => (
                        <UpcomingSession key={item.id} session={item} />
                    ))}
                </ul>
            )}
            <Button onClick={closeModal}>Close</Button>
        </Modal>
    );
}
