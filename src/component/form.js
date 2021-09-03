import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./style.css";

const Form = (props) => {
  const { onAddItem, pushMoney } = props;
  const [name, setName] = useState("");
  const [money, setMoney] = useState(0);

  const username = (event) => {
    setName(event.target.value);
  };

  const moneySet = (event) => {
    setMoney(event.target.value);
  };

  const submitBtn = (event) => {
    event.preventDefault();
    pushMoney(Number(money));

    const itemData = {
      id: uuidv4(),
      name: name,
      money: Number(money),
    };
    onAddItem(itemData);
    setName("");
    setMoney(0);
  };

  return (
    <div>
      <form onSubmit={submitBtn} className="form-control">
        <div className="form-control">
          <label>Name : </label>
          <input type="text" onChange={username} value={name} />
        </div>
        <div>
          <label>Money : </label>
          <input type="number" value={money} onChange={moneySet} />
        </div>
        <div>
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
