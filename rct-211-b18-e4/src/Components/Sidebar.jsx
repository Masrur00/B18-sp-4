import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initSort = searchParams.get("sortBy");
  const [sortBy, setSortBy] = useState(initSort || "");

  const handleSort = (e) => {
    setSortBy(e.target.value);
    if (e.target.value !== "") {
      setSearchParams({ sort: e.target.value });
    }
  };

  // useEffect(() => {

  // }, [sortBy]);

  return (
    <div
      style={{
        minWidth: "250px",
        height: "90vh",
        border: "1px solid black",
      }}
    >
      <h3>Sort By</h3>
      <div style={{ textAlign: "left", fontSize: "20px" }}>
        <div>
          <input
            type="radio"
            name="radio"
            data-cy="asc"
            value="asc"
            defaultChecked={sortBy === "asc"}
            onChange={handleSort}
            style={{ width: "20px" }}
          />
          <label>Ascending</label>
        </div>
        <div>
          <input
            type="radio"
            name="radio"
            data-cy="desc"
            value="desc"
            defaultChecked={sortBy === "desc"}
            onChange={handleSort}
            style={{ width: "20px" }}
          />
          <label>Descending</label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
