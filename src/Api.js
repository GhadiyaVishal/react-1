import axios from "axios";

export const fetchData = () => {
  return axios.get(
    `https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json`
  );
};
