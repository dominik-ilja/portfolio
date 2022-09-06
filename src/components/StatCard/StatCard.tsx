type Props = {
  title: string;
  value: string | number;
};

const StatCard = (props: Props) => {
  return (
    <div className="w-full p-4 text-center bg-bg-light">
      <h4 className="font-light text-text">{props.title}</h4>
      <p>{props.value}</p>
    </div>
  );
};

export default StatCard;
