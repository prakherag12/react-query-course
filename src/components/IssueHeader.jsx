import { GoIssueClosed, GoIssueOpened } from "react-icons/go";
import { relativeDate } from "../helpers/relativeDate";
import useUserData from "../helpers/useUserData";
import { possibleStatus } from "./StatusSelect";

export const IssueHeader = ({
  title,
  number,
  status = "todo",
  createdBy,
  createdDate,
  comments,
}) => {
  const statusObj = possibleStatus.find((e) => e.id === status);

  const createdUser = useUserData(createdBy);

  return (
    <header>
      <h2>
        {title} <span>#{number}</span>
      </h2>
      <div>
        <span
          className={
            status === "done" || status === "cancelled" ? "closed" : "open"
          }
        >
          {status === "done" || status === "cancelled" ? (
            <GoIssueClosed />
          ) : (
            <GoIssueOpened />
          )}
          {statusObj.label}
        </span>
        <span className="created-by">
          {createdUser.isLoading ? "..." : createdUser.data?.name}
        </span>{" "}
        opened this issue {relativeDate(createdDate)} {" . "} {comments.length}{" "}
        comments
      </div>
    </header>
  );
};
