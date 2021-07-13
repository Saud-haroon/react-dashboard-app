import React from 'react'
import './widgetlg.css'

const WidgetLg = () => {
    const Button = ({ type }) => {
        return <button className={'widgetLgBtn ' + type}>{type}</button>
    }

    return (
        <div className='widgetLg'>
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.unsplash.com/photo-1599140782131-42b91c7e4266?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">11 July 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="wiggetLgStatus">
                        <Button type='Approved'/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.unsplash.com/photo-1599140782131-42b91c7e4266?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">11 July 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="wiggetLgStatus">
                        <Button type='Declined'/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.unsplash.com/photo-1599140782131-42b91c7e4266?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">11 July 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="wiggetLgStatus">
                        <Button type='Pending'/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.unsplash.com/photo-1599140782131-42b91c7e4266?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">11 July 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="wiggetLgStatus">
                        <Button type='Approved'/>
                    </td>
                </tr>
            </table>


        </div>
    )
}

export default WidgetLg
