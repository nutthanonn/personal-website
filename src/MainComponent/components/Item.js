import PropTypes from "prop-types";
import "./style.css";
import DataContext from "../data/DataContext";
import { useContext } from "react";

const Item = (props) => {
  const { name, money } = props;
  const MainApp = useContext(DataContext);

  const status = money < 0 ? "expense" : "income";
  const symbol = money < 0 ? "-" : "+";

  return (
    <span className="itemli">
      <li className={status}>
        {name}
        <span>
          &nbsp;{symbol}
          {Math.abs(money)}
        </span>
        {MainApp}
      </li>
    </span>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  money: PropTypes.number.isRequired,
};

export default Item;
