import React from 'react'
import Featuredinfo from '../../components/featuredinfo/Featuredinfo'
import Chart from '../../components/chart/Chart'
import WidgetSm from '../../components/widgetsm/WidgetSm'
import WidgetLg from '../../components/widgetlg/WidgetLg'
import { userData } from '../../data/dummyData'

import './home.css'

const Home = () => {
    return (
        <div className='home'>
            <Featuredinfo/>
            <Chart data={userData} title='User Analatics' grid dataKey= 'Active User'/>            
            <div className='homeWidgets'>
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}

export default Home

