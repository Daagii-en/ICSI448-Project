import mainWorker from "../../../worker/worker";
import FileSaver from "file-saver";
import {
    Modal
} from "antd";

export const initialize = (props) => {
    // let steps = [];

    // if (props.files.mode !== "decrypt") {
    //     if (props.files.mode === "encrypt-multiple") {
    //         steps = ["Encrypting file."];
    //     } else {
    //         steps = ["Encrypting file."];
    //     };
    //     steps = [...steps,
    //         "Encrypting file..",
            
    //     ];
    // } else {
    //     steps = [
    //         "Decrypting file.",
            
    //     ];
    // };

    const worker = mainWorker();

    // props.setSteps(steps);

    // worker.addEventListener("message", (e) => {
    //     if (e.data === "incrementProgress") {
    //         props.nextStep();
    //     };
    // });


    if (props.files.mode === "encrypt-multiple") {
        worker.combineToZip(props.files.fileList).then((data) => {
            // props.nextStep();
            worker.encrypt(data, "package.zip", props.files.password, props.files.hint).then((obj) => {
                Modal.success({
                    title: "Successfully",
                    content: "",
                    onOk: () => props.reset()
                });
                FileSaver.saveAs(obj.file, obj.name);
            });
        });
    } else if (props.files.mode === "encrypt") {
        worker.fileToData(props.files.fileList[0]).then((data) => {
            // props.nextStep();
            worker.encrypt(data, props.files.fileList[0].name, props.files.password, props.files.hint).then((obj) => {
                Modal.success({
                    title: "Successfully",
                    content: "The file is successfully encrypted and you can save your file with AE extension",
                    onOk: () => props.reset()
                });
                FileSaver.saveAs(obj.file, obj.name);
            });
        });
    } else {
        worker.decrypt(props.files.fileList[0], props.files.password).then((obj) => {
            if (obj.error == null) {
                Modal.success({
                    title: "Successfully",
                    content: "The file has been successfully decrypted and your file has been downloaded.",
                    onOk: () => props.reset()
                });
                FileSaver.saveAs(obj.file, obj.name);
            } else {
                if (obj.error === "key-incorrect-or-corrupted") {
                    Modal.error({
                        title: "The password is incorrect",
                        content: "Decryption failed. Please check your password.",
                        onOk: () => props.reset()
                    });
                }
            };
        });
    }
};