import React from "react";
import bodyCSS from "./body.module.css";
import Container from "./container/Container";

const Body = () => {
  return (
    <div className={bodyCSS.body}>
      <div className={bodyCSS.description}>
        <div className={bodyCSS.button}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </div>
        <div className={bodyCSS.text}>
          <div className={bodyCSS.textcont}>
            <h1>
              <center>Файл нууцлах веб апп</center>
            </h1>
            <p>
              Та AES стандартаар файлаа шифрлэн нууцалснаар бусдаас өөрийн
              мэдээллээ хамгаалж чадна. Энэхүү веб нь таны файлыг нууж мөн
              нууцалсан файлыг задлах боломжтой юм.
            </p>
          </div>
        </div>
        <div className={bodyCSS.button}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
      </div>
      <Container />
    </div>
  );
};

export default Body;
