export const fetchCandidates = (url) => {
  return fetch(url).then((resolve) => resolve.json());
};

export const fetchReports = () => {
  return fetch("http://localhost:3333/api/reports").then((resolve) =>
    resolve.json()
  );
};
