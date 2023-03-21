import "./App.css";
import Data from "./components/Data";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { dataActions } from "./store/store";

function App() {
  const userData = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch(dataActions.addData(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Users details</h1>
      <div className="main_wrapper">
        {userData.map((ele, ind) => {
          return (
            <Data
              key={ind}
              id={ele.id}
              username={ele.username}
              email={ele.email}
              address={
                ele.address.suite +
                " " +
                ele.address.street +
                " " +
                ele.address.city +
                " " +
                ele.address.zipcode
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
