import React, { useState } from "react";

const Table = () => {
  const [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);

  const handleDateSort = () => {
    const sortedData = [...data].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setData(sortedData);
  };

  const handleViewsSort = () => {
    const sortedData = [...data].sort((a, b) => b.views - a.views);
    setData(sortedData);
  };

  return (
    <div className="container">
      <h1>Date and Views Table</h1>
      <div>
        <button onClick={handleDateSort}>Sort by Date</button>
        <button onClick={handleViewsSort}>Sort by Views</button>
      </div>
      <table>
        <tr>
          <th>Date</th>
          <th>Views</th>
          <th>Article</th>
        </tr>
        {data.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
