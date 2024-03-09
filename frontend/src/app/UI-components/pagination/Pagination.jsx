import React from 'react'
import { getPagesArray } from '../../utils/pages'

const Pagination = ({ totalPages, page, changePage }) => {
  const pagesArray = getPagesArray(totalPages)

  return (
    <div className="pagination__container">
      {pagesArray.map((p) => (
        <div
          onClick={() => changePage(p)}
          key={p}
          className={page !== p ? 'pagination__page' : 'pagination__page active'}
        >
          {p + 1}
        </div>
      ))}
    </div>
  )
}

export default Pagination
