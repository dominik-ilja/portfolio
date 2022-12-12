import { githubStats as GITHUB_STATS_DATA } from "../../../../../constants/projectData";
import StatCard from "../../../../Cards/StatCard/StatCard";

const GitHubStats = () => {
  return (
    <div>
      <h2 className="mb-6 text-xl text-center text-base-40">GitHub Stats</h2>
      <div className="grid grid-cols-1 gap-y-3">
        {GITHUB_STATS_DATA.map((data) => (
          <StatCard key={data.stat} data={data} />
        ))}
      </div>
    </div>
  );
};

export default GitHubStats;
