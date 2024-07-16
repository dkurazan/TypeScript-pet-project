import { FormEvent, useState } from "react";
import Input from "../UI/Input.tsx";
import Modal from "../UI/Modal.tsx";
import Button from "../UI/Button.tsx";
import { useSessionsContext } from "../../store/sessions-store.tsx";
import { type SessionItem as SessionType } from "../../store/sessions-store.tsx";

type BookSessionProps = {
    modalState: boolean;
    currSession: SessionType;
    closeModal: () => void;
};

export default function BookSession({
    modalState,
    currSession,
    closeModal,
}: BookSessionProps) {
    const { addSession } = useSessionsContext();

    const handleGetInputData = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const fd = new FormData(event.currentTarget);
        const data = Object.fromEntries(fd);

        console.log(data);
        addSession(currSession)

        closeModal();
        event.currentTarget.reset();
    };

    return (
        <Modal open={modalState} onClose={closeModal}>
            <h2>Book Session</h2>
            <form onSubmit={handleGetInputData}>
                <Input title="YOUR NAME" id="name" type="text" name="name" />
                <Input
                    title="YOUR EMAIL"
                    id="email"
                    type="email"
                    name="email"
                />
                <div className="actions">
                    <Button type="button" textOnly onClick={closeModal}>
                        Cancel
                    </Button>
                    <Button>Book Session</Button>
                </div>
            </form>
        </Modal>
    );
}
