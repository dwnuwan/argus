import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {createDocument,fetchExternalProviders} from '../../redux';
import { useNavigate } from "react-router-dom";
import { Col, Row,Button, Checkbox, Form, Input,Typography,DatePicker,Select,InputNumber } from 'antd';

const { Title } = Typography;
const { TextArea } = Input;
const { Option } = Select;
const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const onFinish = (values) => {
    console.log('Success:', values);
    handleCreateDocument(values);
  };


  useEffect(() => {
      
    dispatch(fetchExternalProviders());

  }, []);

  const _externalProviderReducer = useSelector((state) => state.externalProviders);


  const handleCreateDocument = (values) =>{
    values.isExpired = false;
    values.status = "Active";
    values.tenantId = 2;

    dispatch(createDocument(values))
    navigate("/documents");
  }
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return  <div className=" m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">

<Row gutter={16}>
<Col className="gutter-row" span={24}>
<Title level={3}>Create Document</Title>  
<Form
    name="create"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 800 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
   <Form.Item
      label="Access Level"
      name="accessLevel"
      rules={[{ required: true, message: 'Access Level' }]}
    >
     <Select defaultValue="Public" style={{ width: '50%' }}>
        <Option value="Public">Public</Option>
        <Option value="Domain">Domain</Option>
        <Option value="Confidential">Confidential</Option>
        
      </Select>
    </Form.Item>

    <Form.Item
      label="Provider"
      name="externalProviderId"
      rules={[{ required: true, message: 'Provider' }]}
    >
     <Select defaultValue="Public" style={{ width: '50%' }}>
     {_externalProviderReducer.externalProviders.map((option) => (
          <Option key={option.id} value={option.id
          }>
            {option.companyName
}
          </Option>
        ))}
       
        
      </Select>
    </Form.Item>

    <Form.Item
      label="Name"
      name="name"
      rules={[{ required: true, message: 'Please input Document Name' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Type"
      name="type"
      rules={[{ required: true, message: 'Please input Document Type!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Description"
      name="introduction"
      rules={[{ required: true, message: 'Please input Document Intro!' }]}
    >
      <TextArea rows={4} />
    </Form.Item>

    <Form.Item
      label="Issued On"
      name="issueDate"
      rules={[{ required: true, message: 'Please input Document Issued On !' }]}
    >
     <DatePicker style={{ width: '50%' }} />
    </Form.Item>

    <Form.Item
      label="Category"
      name="category"
      rules={[{ required: true, message: 'Please input Document Category' }]}
    >
     <Select defaultValue="Legal" style={{ width: '50%' }}>
        <Option value="Legal">Legal</Option>
        <Option value="HR">HR</Option>
        
      </Select>
    </Form.Item>

    <Form.Item
      label="Valid Period(in Month)"
      name="validPeriod"
      rules={[{ required: true, message: 'Please input Document Valid Period !' }]}
    >
     <InputNumber min={1} max={365} defaultValue={12}  style={{ width: '50%' }} />
    </Form.Item>

    <Form.Item
      label="AlertBefore"
      name="alertBefore"
      rules={[{ required: true, message: 'Please input Document AlertBefore !' }]}
    >
     <InputNumber min={1} max={365} defaultValue={14}  style={{ width: '50%' }} />
    </Form.Item>

   
    

    <Form.Item wrapperCol={{ offset: 8, span: 16 }} >
      <Button type="primary"  htmlType="submit" style={{background:'#1677ff'}}>
        Create
      </Button>
    </Form.Item>
  </Form>

      </Col>

</Row>
  </div>;
};

export default Create;