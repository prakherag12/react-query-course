import useLabelsData from "../helpers/useLabelsData";

export const Label = ({ label }) => {
  const labelsQuery = useLabelsData();

  if (labelsQuery.isLoading) return null;

  const labelObject = labelsQuery.data.find((each) => each.id === label);
  if (!labelObject) {
    return null;
  }

  return (
    <span className={`label ${labelObject.color}`}>{labelObject.name}</span>
  );
};
