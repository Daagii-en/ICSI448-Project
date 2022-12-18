import React, { Component } from "react";
import { Modal, Form, Input } from "antd";
import { connect } from "react-redux";
import { mapState, mapDispatch } from "./PasswordModal.map";
import * as PasswordModalLogic from "./PasswordModal.logic";
import PasswordMeter from "./PasswordMeter/PasswordMeter";

const PasswordModalForm = Form.create({ name: "form_in_modal" })(
  class extends Component {
    render() {
      const { visible, onCancel, onCreate, form, mode } = this.props;
      const { getFieldDecorator } = form;
      let passwordField = this.props.form.getFieldValue("password");

      return (
        <Modal
          visible={visible}
          title={mode !== "decrypt" ? "Encrypt file" : "Decrypt file"}
          okText={mode !== "decrypt" ? "Encryption" : "Decryption"}
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Password">
              {getFieldDecorator("password", {
                rules: [{ required: true, message: "password" }],
              })(<Input.Password placeholder="password" />)}

              {mode !== "decrypt" ? (
                <PasswordMeter password={passwordField} />
              ) : (
                ""
              )}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

class PasswordModal extends Component {
  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      form.resetFields();
      PasswordModalLogic.onFormData(this.props, values);
    });
  };

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  };

  onReset = () => {
    const form = this.formRef.props.form;
    form.resetFields();
    this.props.onReset();
  };

  render() {
    return (
      <PasswordModalForm
        wrappedComponentRef={this.saveFormRef}
        visible={this.props.modal.show}
        onCancel={this.onReset}
        onCreate={this.handleCreate}
        mode={this.props.mode}
      />
    );
  }
}

export default connect(mapState, mapDispatch)(PasswordModal);
