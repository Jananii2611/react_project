import React from "react";
function Pagination({ current, total, onPage }) {
  return (
    <div className="pagination">
      <button disabled={current === 1} onClick={() => onPage(current - 1)}>&lt;</button>
      <span>Page {current} of {total}</span>
      <button disabled={current === total} onClick={() => onPage(current + 1)}>&gt;</button>
    </div>
  );
}
export default Pagination;
