type Props = {
  title: string;
  value: string | number;
};

const StatCard = (props: Props) => {
  return (
    <div className="text-center bg-[#222220] p-4 w-full">
      <h4 className="font-light text-text">{props.title}</h4>
      <p>{props.value}</p>
    </div>
  );
};

export default StatCard;
