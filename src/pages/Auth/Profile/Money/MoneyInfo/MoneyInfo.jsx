import moment from "moment";
import React from "react"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonDefault from "../../../../../components/UI/btns/Button/Button";
import classes from "./MoneyInfo.module.scss";
import { DatePicker, Space } from 'antd';
import { useNavigate, useSearchParams } from "react-router-dom";
import CustomDateRangePicker from "../../../../../components/UI/areas/CustomDateRangePicker/CustomDateRangePicker";
import { useQuery } from "@tanstack/react-query";
import axiosCustom from "../../../../../axios/axiosCustom";
import { getBalanceHistory } from "../../../../../store/actions/authActions";
import { useMemo } from "react";
import HistoryItem from "./components/HistoryItem";
import { useState } from "react";
import dayjs from "dayjs";
import CustomPagination from "../../../../../components/Pagination/Pagination";
import Search from "antd/es/input/Search";

export const MoneyInfo = () => {
  const dateFormat = 'YYYY-MM-DD';
  const [searchParams, setSearchParams] = useSearchParams();

  const from = searchParams.get('from')
  const to = searchParams.get('to')
  const pageUrl = searchParams.get('page')
  const check = searchParams.get('check')
  const [dates, setDates] = useState([dayjs(from), dayjs(to)])
  const [page, setPage] = useState(pageUrl)
  const [search, setSearch] = useState('')



  const searchHandler = () => {
    const filtersObg = {
      page: page,
      from: dates[0].format("YYYY-MM-DD"),
      to: dates[1].format("YYYY-MM-DD"),
      check: check,
    }
    setSearchParams(filtersObg, { replace: true });
  }

  useEffect(() => {
    if (dates) {
      searchHandler()
    }
  }, [dates, page, check])

  useEffect(() => {
    document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }, [page])

  const { data, isInitialLoading, isError } = useQuery(["balance-history", { to, from, page, search }], () =>
    axiosCustom.get(`https://testapi.eu-nl.com/api/v1/customer/balance-history?account_type=${check}&start_date=${searchParams.get("from")}&end_date=${searchParams.get("to")}&page=${page}${search ? "&search=" + search : ''}`)
  );

  const templateHistory = useMemo(() => {
    if (data?.data?.data?.data) {
      return data?.data?.data?.data.map((item, key) => <HistoryItem key={key} item={item} />)
    }
  }, [data])

  function onSearch(value) {
    setPage(1)
    setSearch(value)
  }

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.return}>Return money</div>
        <h2 className={classes.title}>077-479861, unit account, EUR</h2>
        <div className={classes.btns}>
          <div className={classes.date} >
            <p className={classes.date_gray}>Period</p>
            <CustomDateRangePicker dates={dates} setDates={setDates} />
          </div>
          <ButtonDefault title={"Export to Excel"} className={classes.btns_export}></ButtonDefault>
        </div>
{      /*  <div className={classes.balance}>
          <div>
            <div className={classes.balance_title}>Statistic1</div>
            <div className={classes.balance_price}>XXXXXXXX</div>
          </div>
          <div>
            <div className={classes.balance_title}>Statistic2</div>
            <div className={classes.balance_price_green}>XXXXXXXX</div>
          </div>
  </div>*/}
        <div className={classes.info}>
          <Search placeholder="Search" style={{ width: '100%', marginBottom: 30 }} onSearch={onSearch} />

          <div className={classes.info_titles}>
            <span className={classes.info_titles_left}>Date</span>
            <span className={classes.info_titles_left}>Comment</span>
            <span>Сoming, €</span>
            <span>Expenditure, €</span>
            {// <span>Remains, €</span>
            }
          </div>
          <div>
            {templateHistory}
          </div>
        </div>
      </div>
    {data?.data?.data?.total > 15 &&  <CustomPagination total={data?.data?.data?.total} page={page} changePage={setPage} />}
    </>
  )
}

export default MoneyInfo
