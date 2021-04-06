import React from 'react';

function Pagination({totalPages}) {
  const pagesArray = Array.from({length: totalPages}, (v, k) => k+1);
  
  return (
    <nav aria-label="...">
      <ul className="pagination">
        <li className="page-item disabled">
          <span className="page-link">Previous</span>
        </li>
        {pagesArray.map(page => <li className="page-item" key={page}><a className="page-link" href={page}>{page}</a></li>)}
        <li className="page-item">
          <a className="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination;
