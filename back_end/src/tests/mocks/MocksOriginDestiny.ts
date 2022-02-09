const defaultAPI = [
  {
    id_origin_destiny: 1,
    origin: 1,
    destiny: 2,
    value: 1.9,
  },
  {
    id_origin_destiny: 2,
    origin: 2,
    destiny: 1,
    value: 2.9,
  },
  {
    id_origin_destiny: 3,
    origin: 1,
    destiny: 3,
    value: 1.7,
  },
  {
    id_origin_destiny: 4,
    origin: 3,
    destiny: 1,
    value: 2.7,
  },
  {
    id_origin_destiny: 5,
    origin: 1,
    destiny: 4,
    value: 0.9,
  },
  {
    id_origin_destiny: 6,
    origin: 4,
    destiny: 1,
    value: 1.9,
  },
];

const defaultAPITest = [
  {
    value: 1.9,
    id_origin_destiny: 1,
    origin: {
      description: "011",
      id_DDDs: 1,
    },
    destiny: {
      description: "016",
      id_DDDs: 2,
    },
  },
  {
    value: 2.9,
    id_origin_destiny: 2,
    origin: {
      description: "016",
      id_DDDs: 2,
    },
    destiny: {
      description: "011",
      id_DDDs: 1,
    },
  },
  {
    value: 1.7,
    id_origin_destiny: 3,
    origin: {
      description: "011",
      id_DDDs: 1,
    },
    destiny: {
      description: "017",
      id_DDDs: 3,
    },
  },
  {
    value: 2.7,
    id_origin_destiny: 4,
    origin: {
      description: "017",
      id_DDDs: 3,
    },
    destiny: {
      description: "011",
      id_DDDs: 1,
    },
  },
  {
    value: 0.9,
    id_origin_destiny: 5,
    origin: {
      description: "011",
      id_DDDs: 1,
    },
    destiny: {
      description: "018",
      id_DDDs: 4,
    },
  },
  {
    value: 1.9,
    id_origin_destiny: 6,
    origin: {
      description: "018",
      id_DDDs: 4,
    },
    destiny: {
      description: "011",
      id_DDDs: 1,
    },
  },
];

const addedAPI = defaultAPITest.concat({
  value: 1.7,
  id_origin_destiny: 7,
  origin: {
    description: "018",
    id_DDDs: 4,
  },
  destiny: {
    description: "016",
    id_DDDs: 2,
  },
});

const updatedAPI = defaultAPITest.concat({
  value: 1.9,
  id_origin_destiny: 7,
  origin: {
    description: "017",
    id_DDDs: 3,
  },
  destiny: {
    description: "016",
    id_DDDs: 2,
  },
});

export default { defaultAPI, defaultAPITest, addedAPI, updatedAPI };