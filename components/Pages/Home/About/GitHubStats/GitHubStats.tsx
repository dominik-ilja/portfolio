import { twMerge } from "tailwind-merge";
import { githubStats as GITHUB_STATS_DATA } from "../../../../../constants/projectData";
import StatCard from "../../../../Cards/StatCard/StatCard";

type Props = {
  className?: string;
};

const GitHubStats = ({ className, ...props }: Props) => {
  const classes = twMerge(className, "flex flex-col lg:flex-row-reverse");

  return (
    <div className={classes}>
      <h2 className="mb-6 text-xl text-center lg:text-2xl lg:ml-2 lg:text-left lg:whitespace-nowrap lg:[writing-mode:vertical-rl] text-base-40">
        GitHub Stats
      </h2>
      <div className="grid flex-grow grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-2">
        {GITHUB_STATS_DATA.map((data) => (
          <StatCard key={data.stat} data={data} />
        ))}
      </div>
    </div>
  );
};

export default GitHubStats;
