import React from 'react';
import { Link } from 'react-router-dom'

const StoreItem = (store) => (
        <div className="col-lg-4">
            <div className="row">
                <div className="col-lg-12">
                    <h1>{`${store.name}`}</h1>
                </div>
                <div className="col-lg-12">
                    <h3>{`${store.description}`}</h3>
                </div>
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-6">
                            <Link to="/edit/">Edit Store {`${store.storeId}`}</Link>
                        </div>
                        <div className="col-lg-6">
                            <Link to="/edit">Delete Store</Link>
                        </div>

                    </div>
                </div>
            </div>

        </div>
);

export default StoreItem;