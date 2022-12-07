import "./fileInput.css";
import "bootstrap";
import { Stack, Button } from "react-bootstrap";
export default function File() {
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
      <div className="fileInfo">
        <div>
          Файлаа оруулна уу:{" "}
          <input
            className="fileInput"
            type="file"
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
}
