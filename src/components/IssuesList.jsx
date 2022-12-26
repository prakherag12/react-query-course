import { useQuery } from "react-query";
import { IssueItem } from "./IssueItem";

export default function IssuesList({ labels, status }) {
  const { data, isLoading } = useQuery(["issues", { labels, status }], () => {
    const statusString = status ? `&status=${status}` : "";
    const labelsString = labels.map((l) => `labels[]=${l}`).join("&");

    return fetch(`/api/issues?${labelsString}${statusString}`).then((rs) =>
      rs.json()
    );
  });

  return (
    <div>
      <h2>Issues List</h2>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <ul className="issues-list">
          {data &&
            data.map((issue) => (
              <IssueItem
                key={issue.id}
                title={issue.title}
                number={issue.number}
                assignee={issue.assignee}
                commentCount={issue.comments.length}
                createdBy={issue.createdBy}
                createdDate={issue.createdDate}
                labels={issue.labels}
                status={issue.status}
              />
            ))}
        </ul>
      )}
    </div>
  );
}
