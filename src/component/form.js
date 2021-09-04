import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./style.css";
import { Button } from "@material-ui/core";

const Form = (props) => {
  const { onAddItem, pushMoney } = props;
  const [name, setName] = useState("");
  const [money, setMoney] = useState(0);
  const [formValue, setFormValue] = useState(false);

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

  useEffect(() => {
    const checkData = name.trim().length > 0 && money !== 0;
    setFormValue(checkData);
  }, [name, money]);

  return (
    <div>
      <form onSubmit={submitBtn} className="form-control">
        <div className="form-control">
          <label>Name : </label>
          <input type="text" onChange={username} value={name} />
        </div>
        <div>
          <label>Money : </label>
          <input type="number" onChange={moneySet} value={money} />
        </div>
        <div>
          <Button
            type="submit"
            disabled={!formValue}
            variant="contained"
            size="small"
            color="primary"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
