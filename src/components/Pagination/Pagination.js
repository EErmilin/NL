import React from 'react';
import { Pagination } from 'antd';
import classes from "./Pagination.module.scss"
import './Pagination.css'

const CustomPagination = ({total,page, changePage}) => {
    console.log('!@@@@@@@@@@@@')
  //  console.log(page)

   return <Pagination
   onChange={(value)=>changePage(value)}
        className={classes.pagination}
        showSizeChanger={false}
        defaultCurrent={1}
        current={Number(page)}
        total={total}
    />
};
export default CustomPagination;