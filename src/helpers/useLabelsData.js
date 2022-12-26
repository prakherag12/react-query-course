import { useQuery } from "react-query";

const useLabelsData = () => {
  const labelsQuery = useQuery(["labels"], () =>
    fetch("/api/labels").then((r) => r.json())
  );
  return labelsQuery;
};

export default useLabelsData;
