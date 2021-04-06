import React from 'react';

function Pagination({totalPages, currentPage}) {
  const pagesArray = Array.from({length: totalPages}, (v, k) => k+1);
  
  return (
    <nav aria-label="...">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`} >
          <a className="page-link" href={currentPage - 1}>Previous</a>
        </li>
        {pagesArray.map(page => <li className={`page-item ${page == currentPage ? "active" : ""}`} key={page}><a className="page-link" href={page}>{page}</a></li>)}
        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
          <a className="page-link" href={currentPage + 1}>Next</a>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination;
