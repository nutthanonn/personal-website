import Item from "./Item";

const Title = (props) => {
  const { items } = props;

  return (
    <ul>
      {items.map((item) => {
        return <Item {...item} key={item.id} />;
      })}
    </ul>
  );
};

export default Title;
