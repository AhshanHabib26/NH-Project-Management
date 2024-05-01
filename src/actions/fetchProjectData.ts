export const fetchProjectData = async () => {
  const res = await fetch(
    "https://d96cdd39-729e-4baf-a3b1-edfbe6f6eb01.mock.pstmn.io/projects",
    {
      cache: "no-store",
    }
  );

  const data = await res.json();
  return data.data;
};
