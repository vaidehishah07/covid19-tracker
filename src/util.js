export const sortData = (data) => {
  const sortData = [...data];

  return sortData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
  //     if (a.cases > b.cases) {
  //       return -1;
  //     } else {
  //       return 1;
  //     }
  //   });

  //   return sortData;
};
