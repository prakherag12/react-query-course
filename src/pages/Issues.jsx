import { useState } from "react";
import IssuesList from "../components/IssuesList";
import LabelList from "../components/LabelList";
import { StatusSelect } from "../components/StatusSelect";
export default function Issues() {
  const [labels, setLabels] = useState([]);

  const [status, setStatus] = useState("");

  const handleToggle = (label) => {
    setLabels((currentLabels) =>
      currentLabels.includes(label)
        ? currentLabels.filter((e) => e !== label)
        : currentLabels.concat(label)
    );
  };

  return (
    <div>
      <main>
        <section>
          <h1>Issues</h1>
          <IssuesList labels={labels} status={status} />
        </section>
        <aside>
          <LabelList selected={labels} toggle={handleToggle} />
          <h3>Status</h3>
          <StatusSelect
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </aside>
      </main>
    </div>
  );
}
