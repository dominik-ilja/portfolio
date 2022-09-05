type Props = {
  title: string;
  value: string | number;
};

const StatCard = (props: Props) => {
  return (
    <div>
      <h4>{props.title}</h4>
      <p>{props.value}</p>
    </div>
  );
};

export default StatCard;
