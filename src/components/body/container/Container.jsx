import React from "react";
import ContainerCSS from "./Container.module.css";
import FileSelect from "./fileselect/FileSelect";
import PasswordModal from "../../modal/PasswordModal/PasswordModal";
import StepModal from "../../modal/StepModal/StepModal";

const Container = (props) => {
  return (
    <div className={ContainerCSS.container}>
      <h1>
        <center>Файл нууцлах веб апп</center>
      </h1>
      <h3></h3>
      <PasswordModal />
      <StepModal />

      <FileSelect />
    </div>
  );
};

export default Container;
