import React from 'react';
import { Link } from 'react-router-dom'

const DonutItem = (store) => (
        <div className="col-lg-4">
            <div className="row donut-item">
                <div className="col-lg-12">
                    <h1>{`${store.name}`}</h1>
                </div>
                <div className="col-lg-12">
                    <h3>{`${store.description}`}</h3>
                </div>
            </div>

        </div>
);

export default DonutItem;