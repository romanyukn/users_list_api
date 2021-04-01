import React from 'react';

function Pagination() {
  return (
    <nav aria-label="...">
      <ul className="pagination">
        <li className="page-item disabled">
          <span className="page-link">Previous</span>
        </li>
        <li className="page-item"><a className="page-link" href="1">1</a></li>
        <li className="page-item"><a className="page-link" href="2">2</a></li>
        <li className="page-item"><a className="page-link" href="3">3</a></li>
        <li className="page-item">
          <a className="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination;
