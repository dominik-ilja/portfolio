type Props = {
  data: StatObject;
};

const StatCard = ({ data: { stat, value } }: Props) => {
  return (
    <div className="p-3 text-center bg-base-10">
      <div className="mb-1 text-base-50">{stat}</div>
      <div className="text-xl text-white">{value}</div>
    </div>
  );
};

export default StatCard;
