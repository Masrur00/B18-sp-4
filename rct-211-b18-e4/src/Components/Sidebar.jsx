import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initSort = searchParams.get("sortBy");
  const [sortBy, setSortBy] = useState(initSort || "");

  const handleSort = (e) => {
    if (sortBy !== e.target.value) {
      setSortBy(e.target.value);
    }
  };

  useEffect(() => {
    setSearchParams({ sort: sortBy });
  }, [sortBy]);

  return (
    <div
      style={{
        minWidth: "250px",
        height: "90vh",
        border: "1px solid black",
      }}
    >
      <h3>Sort By</h3>
      <div>
        <div>
          <input
            type="radio"
            name="radio"
            data-cy="asc"
            value="asc"
            defaultChecked={sortBy === "asc"}
            onChange={handleSort}
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
          />
          <label>Descending</label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
