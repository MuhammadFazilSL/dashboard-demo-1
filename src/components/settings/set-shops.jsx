import React from 'react'

const Setshops = () => {
  return (
    <div className="set-shops">
        <div>
            <h3>Linked shops</h3>
            <p>Manage your Linked shops</p>
            <hr />
        </div>
        <div>
            <span>
                <h3>Linked shopify stores</h3>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </span>
            <span>
                <p>Link</p>
                <input type="text" placeholder='xyz.myshopify.com'/>
                <button>Link shop</button>
            </span>
        </div>
        <div>
        <span>
                <h3>Linked ebay stores</h3>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </span>
            <span>
                <p>Link</p>
                <input type="text"  placeholder='xyz.ebay.com' />
                <button>Link shop</button>
            </span>
        </div>
    </div>
  )
}

export default Setshops