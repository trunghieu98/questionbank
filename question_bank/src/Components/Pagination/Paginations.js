import React from 'react';
function Paginations({ page,paginate }) {
    const pageNumbers=[];
    for(let i=1;i<=page;i++){
        pageNumbers.push(i);
    }
    return(
        <nav>
            <ul className="pagination">
               {pageNumbers.map(number=>(
                   <li key={number} className="page-item">
                       <a onClick={()=>paginate(number)}  className="page-link">{number}</a>
                   </li>
               ))}
            </ul>
        </nav>
    )
}
export default Paginations;