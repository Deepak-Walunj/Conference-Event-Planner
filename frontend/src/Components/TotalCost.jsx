import { useState, useEffect } from "react";
import './TotalCost.css'
const TotalCost = ({totalCosts, displayItems}) =>{
    return (
        <div className="pricing-app">
            <div className="display_box">
            <div className="header">
                <p className="preheading"><h3>Total cost for the event</h3></p>
            </div>
            <div>
                <h2 id="pre_fee_cost_display" className="price">
                
                </h2>
                
                <div>
                    
                </div>
            </div>
            </div>
        </div>
        );
}

export default TotalCost