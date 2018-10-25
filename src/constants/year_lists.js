export const allYears = [];

export const createYearList = () => {
  [...Array(68).keys()].map(key => {
    const year = (key + 1951).toString();
    allYears.push({ value: year, label: year });
  });
};
