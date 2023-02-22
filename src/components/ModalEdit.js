import { Button, Form, Input, Modal, Radio } from "antd";
import { useEffect, useState } from "react";
const CollectionCreateForm = ({
  open,
  onCancel,
  user,
  updateUser,
}) => {
    const [form] = Form.useForm();
    useEffect(() => {
        form.setFieldsValue(user)
        console.log('userrr',user)
    },[user])
  return (
    <Modal
      open={open}
      title="Update user"
      okText="Update"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={ () => {
        form
          .validateFields()
          .then((values) => {
                 updateUser({...values,id:user.id, age: parseInt(values.age)})
              console.log("New USer trong form:", {
                ...values,
                id: user.id,
                age: parseInt(values.age),
              });
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input the title of collection!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="age"
          label="Age"
          rules={[
            {
              required: true,
              message: "Please input the title of collection!",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default CollectionCreateForm;