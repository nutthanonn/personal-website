import Item from "./Item";
import DataContext from "../data/DataContext";

const Title = (props) => {
  const { items } = props;

  return (
    <div>
      <ul>
        {items.map((item) => {
          return <Item {...item} key={item.id} />;
        })}
      </ul>
      <DataContext.Consumer>{(value) => <p>{value}</p>}</DataContext.Consumer>
    </div>
  );
};

export default Title;
