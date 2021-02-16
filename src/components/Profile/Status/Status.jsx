import React, { useEffect, useState } from "react";

function Status(props) {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onChangeStatus = (e) => {
        setStatus(e.target.value);
    }


    return (
        <div>
            { editMode ? <input autoFocus onBlur={deactivateEditMode} onChange={onChangeStatus} value={status} />
                : <span onDoubleClick={activateEditMode}>{status || "изменить статус"}</span>
            }
        </div>
    )
}

export default Status;