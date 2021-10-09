import React from 'react';
import { Modal } from 'reactstrap';
import { punchIn, punchOut } from '../api/punch';
import { UserSession } from '../App';

interface AttendanceProps {
    userSession: UserSession;
    setUserSession: (userSession: UserSession) => void;
}

const Attendance = ({ userSession, setUserSession }: AttendanceProps) => {
    const punchInHandler = async () => {
        const response: any = await punchIn();
        const data = await response.json();
        setUserSession({ ...userSession, punchInDateTime: data.punchTime })
    }

    const [openModal, setModal] = React.useState(false);
    const [workUpdates, setWorkUpdates] = React.useState("");
    const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWorkUpdates(e.target.value)
    }

    const handleSave = async (e: any) => {
        const response: any = await punchOut(workUpdates);
        const data = await response.json();
        console.log(data);
        setUserSession({ ...userSession, punchOutDateTime: data.punchTime })

    }

    return (
        <div>
            <button onClick={punchInHandler}
                disabled={!!userSession.punchInDateTime}>Punch In</button>
            <button disabled={!userSession.punchInDateTime || !!userSession.punchOutDateTime}
                onClick={() => setModal(!openModal)}> Punch Out</button>
            <Modal isOpen={openModal} size="" >
                Work Updates
                <input onChange={handleText} value={workUpdates} />
                <button onClick={handleSave} value="Save">Save</button>
            </Modal>
        </div>
    )

}
export default Attendance;