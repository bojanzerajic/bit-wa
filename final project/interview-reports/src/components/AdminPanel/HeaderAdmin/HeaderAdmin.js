import React from "react";
import { Link } from "react-router-dom";
import style from "./HeaderAdmin.module.scss";

const HeaderAdmin = () => {
  return (
    <div className={style.wrapper}>
      <div className="row">
        <h1 className={`${style.main_title} col-lg-8`}>
          Reports Administration
        </h1>
        <div className="col-lg-4">
          <div className={`${style.btn_wrapper} row`}>
            <Link className={`col-lg-4 ${style.btn}`} to="/admin/reports">
              Reports
            </Link>
            <Link className={`col-lg-4 ${style.btn}`} to="/admin/create-report">
              Create Report
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HeaderAdmin };
