import React from "react";
import s from "./notification.module.css";

const Notification = ({ message }) => {
  return (
    <>
      <h2>{message}</h2>
      <img
        className={s.img}
        src="https://opt-1031816.ssl.1c-bitrix-cdn.ru/upload/resize_cache/iblock/d92/750_400_1/mogut_li_koshki_plakat.jpg?160674231082395"
        alt="crying cat"
      />
    </>
  );
};

export default Notification;
