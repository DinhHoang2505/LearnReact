import React from 'react'
import classNames from "classnames/bind";

import styles from './DefaultLayout.module.scss'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../components/Header/Header'

const cx = classNames.bind(styles)

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <Sidebar />
                    <div className="content">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout
