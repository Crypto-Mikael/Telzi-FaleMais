const defaultAPI = [
  {
    description: "011",
    id_DDDs: 1,
  },
  {
    description: "016",
    id_DDDs: 2,
  },
  {
    description: "017",
    id_DDDs: 3,
  },
  {
    description: "018",
    id_DDDs: 4,
  },
];

const addedAPI = defaultAPI.concat({
    description: "019",
    id_DDDs: 5,
});

const updatedAPI = defaultAPI.concat({
    description: "020",
    id_DDDs: 5,
});

export default { defaultAPI, addedAPI, updatedAPI };
