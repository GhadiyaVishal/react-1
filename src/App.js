import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Games from "./components/Games";
import { fetchData } from "./Api";

const App = () => {
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);

  // const getGamesDetail = async fetchData => {
  //   try {
  //     const res = await fetchData;
  //     const data = await res.json;
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      delete result.data[0];
      setData(result.data);
      // console.log(result.data);
    };
    // getGamesDetail(fetchData);
    getData();
  }, []);

  // const getTitle = title => {
  //   setTitle(title);
  //   // console.log(title);
  // };
  return (
    <>
      {/* <Header /> */}
      <Games data={data} key={data} />
    </>
  );
};

export default App;
