import React from 'react'

import Table from '../components/table/Table'

import ordersList from '../assets/JsonData/orders-list.json'

const customerTableHead = [
    'order id',
    'ordered items',
    'no.of ordered items',
    'status',
    'total-price',
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item._id}</td>
        <td>{item.ordered_items}</td>
        <td>{item.No_of_ordered_items}</td>
        <td>{item.status}</td>
        <td>{item.total_price}</td>
    </tr>
)

const Orders = () => {
    return (
        <div>
            <h2 className="page-header">
                Orders
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='10'
                                headData={customerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={ordersList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders
