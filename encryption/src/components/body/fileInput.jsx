import Dropzone from "react";
import "./fileInput.css";
import "bootstrap";
import { Stack, Button } from "react-bootstrap";
import * as FileSelectLogic from "./FileSelect.logic";
import { mapState, mapDispatch } from "./FileSelect.map";
import { connect } from "react-redux";

const File = (props) => {
  return (
    <Dropzone onDrop={(fileList) => FileSelectLogic.onDrop(props, fileList)}>
      {({ getRootProps, getInputProps, isDragActive }) => {
        return (
          <div className="bodyCSS">
            <div className="description">
              <div className="pages">
                <label>What is encryption...</label>
              </div>
              <div className="pages">
                <label>Why are we make file encryption...</label>
              </div>
              <div className="pages">
                {" "}
                <label>Файл нууцлал нь ....</label>
              </div>
            </div>
            <div
              {...getRootProps()}
              className={
                classNames("dropzone", { "dropzone--isActive": isDragActive }) +
                " " +
                FileSelectCSS.fileselect
              }
            >
              <div>
                Файлаа оруулна уу:{" "}
                <input
                  className="fileInput"
                  {...getInputProps()}
                  placeholder="Та файлаа оруулна уу."
                />{" "}
              </div>
              <div>
                Нууц үг:{" "}
                <input
                  className="fileInput"
                  type="password"
                  placeholder="Нууц үгээ оруулна уу."
                ></input>{" "}
              </div>
              <div className="warning"></div>
              <div className="buttons">
                <Stack direction="horizontal" gap={2}>
                  <Button className="button" as="" variant="primary">
                    Cancel
                  </Button>
                  <Button className="button button-ok" as="" variant="success">
                    Ok
                  </Button>
                </Stack>
              </div>
            </div>
          </div>
        );
      }}
    </Dropzone>
  );
};
export default connect(mapState, mapDispatch)(File);
