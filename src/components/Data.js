import "./Data.css";
import { useDispatch } from "react-redux";
import { dataActions } from "../store/store";
import { useState } from "react";
function Data(props) {
    const [input, setInput] = useState("");
    const [visible, setVisible] = useState(false);

    const { username, email, address, id } = props;

    const dispatch = useDispatch();

    const inputTextHandler = (event) => {
        setInput(event.target.value);
    };
    const updateSubmitHandler = (event) => {
        event.preventDefault()
        dispatch(dataActions.onUpdate({ id, input }))
        setInput("")
        setVisible(false);
    };

    const updateHandler = () => {
        setVisible(true);
    };

    const deleteHandler = () => {
        dispatch(dataActions.onDelete(id));
    };

    return (
        <div className="wrapper">
            <h2>
                username <br />
                <span>{username}</span>
            </h2>
            <h3>
                email <br />
                <span>{email}</span>
            </h3>
            <h4>
                address <br />
                <span>{address}</span>
            </h4>
            {visible ?
                (<form onSubmit={updateSubmitHandler}>
                    <input type="text" onChange={inputTextHandler} value={input} required />
                    <button type="submit" className="update_text">
                        update
                    </button>
                </form>) : <button className="update" onClick={updateHandler}>
                    update address
                </button>}
            <button type="delete" onClick={deleteHandler} className="delete" on>
                delete
            </button>
        </div>
    );
}

export default Data;
