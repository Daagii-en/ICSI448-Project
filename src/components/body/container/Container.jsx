import React from "react";
import ContainerCSS from "./Container.module.css";
import FileSelect from "./fileselect/FileSelect";
import PasswordModal from "../../modal/PasswordModal/PasswordModal";
import StepModal from "../../modal/StepModal/StepModal";

const Container = (props) => {
  return (
    <div className={ContainerCSS.container}>
      <FileSelect />
      <PasswordModal />
      <StepModal />
    </div>
  );
};

export default Container;
