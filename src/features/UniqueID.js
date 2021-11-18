let UUID = 0;

const UniqueID = (label) => {
  const lowerCaseLabel = label.toLowerCase();
  UUID++;
  return `${lowerCaseLabel}-${UUID}`;
};

export default UniqueID;

// 以下の書き方もできる
// export default function UniqueID() {
//   const getID = () => {
//     UUID++;
//     return UUID;
//   };

//   return {
//     getID,
//   };
// }
