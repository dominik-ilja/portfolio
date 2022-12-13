import { githubStats as GITHUB_STATS_DATA } from "../../../../../constants/projectData";
import StatCard from "../../../../Cards/StatCard/StatCard";

type Props = {
  className?: string;
};

const GitHubStats = (props: Props) => {
  return (
    <div className={`${props.className || ""} relative lg:pr-2`}>
      <h2 className="mb-6 text-xl text-center origin-top-left lg:absolute lg:rotate-90 lg:text-2xl lg:ml-6 lg:left-full lg:whitespace-nowrap text-base-40">
        GitHub Stats
      </h2>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-2">
        {GITHUB_STATS_DATA.map((data) => (
          <StatCard key={data.stat} data={data} />
        ))}
      </div>
    </div>
  );
};

export default GitHubStats;
