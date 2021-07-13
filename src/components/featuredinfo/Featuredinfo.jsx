import React from 'react'
import './featuredinfo.css'

import {ArrowDownward, ArrowUpward} from '@material-ui/icons'

const Featuredinfo = () => {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="fearturedTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,417</span>
                    <span className="featuredMoneyRate">
                        -11.4 <ArrowDownward className='fearturedIcon negative'/>
                    </span>
                </div>
                <span className="featureSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="fearturedTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,417</span>
                    <span className="featuredMoneyRate">
                        -1.4 <ArrowDownward className='fearturedIcon negative'/>
                    </span>
                </div>
                <span className="featureSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="fearturedTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,225</span>
                    <span className="featuredMoneyRate">
                        +2.4 <ArrowUpward className='fearturedIcon'/>
                    </span>
                </div>
                <span className="featureSub">Compared to last month</span>
            </div>
            
        </div>
    )
}

export default Featuredinfo
