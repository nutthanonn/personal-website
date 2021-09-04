import Item from "./Item";

const Title = (props) => {
  const { items } = props;
  return (
    <div>
      <ul>
        {items.map((item) => {
          return <Item {...item} key={item.id} />;
        })}
      </ul>
    </div>
  );
};

export default Title;
