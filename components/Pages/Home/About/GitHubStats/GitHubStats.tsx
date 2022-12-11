import { githubStats as GITHUB_STATS_DATA } from "../../../../../constants/projectData";

const GitHubStats = () => {
  return (
    <div>
      <h2 className="mb-6 text-xl text-center text-base-40">GitHub Stats</h2>
      <div className="grid grid-cols-1 gap-y-3">
        {GITHUB_STATS_DATA.map(({ stat, value }) => (
          <div key={stat} className="p-3 text-center bg-base-10">
            <div className="mb-1 text-base-50">{stat}</div>
            <div className="text-xl text-white">{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubStats;
