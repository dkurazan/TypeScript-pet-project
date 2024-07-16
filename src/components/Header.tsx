import UpcommingSessions from "./Sessions/UpcomingSessions";
import Button from "./UI/Button";
import { useState } from "react";

export default function Header() {
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleShowSessionList = () => {
        setShowModal(true);
    };

    const handleCloseSessionList = () => {
        setShowModal(false);
    };

    return (
        <header id="main-header">
            <h1>DemoMentoring</h1>
            <nav>
                <ul>
                    <Button to="/" textOnly>
                        Our Mission
                    </Button>
                    <Button to="/sessions" textOnly>
                        Browse Sessions
                    </Button>
                    <Button onClick={handleShowSessionList}>
                        Upcoming Sessions
                    </Button>
                </ul>
            </nav>
            <UpcommingSessions modalState={showModal} closeModal={handleCloseSessionList} />
        </header>
    );
}
