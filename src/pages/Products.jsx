import React from 'react'

import Table from '../components/table/Table'

import productsList from '../assets/JsonData/products-list.json'

const customerTableHead = [
    '',
    'name',
    'stock',
    'category',
    'price',
    'rating',
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item._id}</td>
        <td>{item.title}</td>
        <td>{item.stock}</td>
        <td>{item.category}</td>
        <td>{item.price}</td>
        <td>{item.rating}</td>
    </tr>
)

const Products = () => {
    return (
        <div>
            <h2 className="page-header">
                Products
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='10'
                                headData={customerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={productsList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
