import React from 'react';

//ProductsCategoryRow
export default function (props) {
    return <tr className='category-row'><th colSpan='2' className='text-center text-uppercase'>{props.categoryName}</th></tr>
}