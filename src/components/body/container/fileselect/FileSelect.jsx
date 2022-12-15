import React from "react";
import Dropzone from "react-dropzone";
import { Icon } from "antd";
import classNames from "classnames";
import FileSelectCSS from "./FileSelect.module.css";
import { mapState, mapDispatch } from "./FileSelect.map";
import * as FileSelectLogic from "./FileSelect.logic";
import { connect } from "react-redux";

const FileSelect = (props) => {
  return (
    <Dropzone onDrop={(fileList) => FileSelectLogic.onDrop(props, fileList)}>
      {({ getRootProps, getInputProps, isDragActive }) => {
        return (
          <div
            {...getRootProps()}
            className={
              classNames("dropzone", { "dropzone--isActive": isDragActive }) +
              " " +
              FileSelectCSS.fileselect
            }
          >
            <input {...getInputProps()} />
            <h1 className="ant-upload-drag-icon icon">
              {/* <Icon type="file" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className="bi bi-file-earmark-arrow-up"
                viewBox="0 0 16 16"
              >
                <path d="M8.5 11.5a.5.5 0 0 1-1 0V7.707L6.354 8.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 7.707V11.5z" />
                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
              </svg>
            </h1>
            <p className="ant-upload-text">Файлаа энд оруулна уу.</p>
            {/* <p className={FileSelectCSS.smallerfont + " ant-upload-hint"}>
              Энэ цонхон дээр дарж мөн чирж оруулж ирэх боломжтой.
            </p> */}
          </div>
        );
      }}
    </Dropzone>
  );
};

export default connect(mapState, mapDispatch)(FileSelect);
