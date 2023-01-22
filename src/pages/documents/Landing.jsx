import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {  fetchDocuments } from '../../redux';
import Button from '@mui/material/Button';

import { Table, Popconfirm } from 'antd';
import { IconButton } from '../General/IconButton';
import { EyeIcon } from '../General/EyeIcon';
import { EditIcon } from '../General/EditIcon';
import { DeleteIcon } from '../General/DeleteIcon';
import { Tooltip, Col, Row } from '@nextui-org/react';
import { Header } from '../../components';

const Landing = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    useEffect(() => {
      dispatch(fetchDocuments());
    }, []);
  
 
    const columns = [
    
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
      },{
        title:'Category',
        dataIndex:'category',
        key:'category',
      },
      {
        title:'Issued Date',
        dataIndex:'issueDate',
        key:'issueDate',
      },
      {
        title:'Status',
        dataIndex:'status',
        key:'status',
      },
      
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        width:100,
        render: (_, record) =>
          useSelector.length >= 1 ? (
            <Row justify="center" align="center">
              <Col css={{ d: 'flex' }}>
                <Tooltip content="Details">
                  <IconButton onClick={() => {navigate("/documents/detail");}}>
                    <EyeIcon size={20} fill="#979797" />
                  </IconButton>
                </Tooltip>
              </Col>
              <Col css={{ d: 'flex' }}>
                <Tooltip content="Edit user">
                  <IconButton onClick={() => console.log()}>
                    <EditIcon size={20} fill="#979797" />
                  </IconButton>
                </Tooltip>
              </Col>
              <Col css={{ d: 'flex' }}>
                <Tooltip
                  content="Delete user"
                  color="error"
                 
                >
                  <IconButton>
                    <DeleteIcon size={20} fill="#FF0080" />
                  </IconButton>
                </Tooltip>
              </Col>
            </Row>
          ) : null,
      },
    ];
  
    const _documentReducer = useSelector((state) => state.documents);
   
    return (
      <div className=" m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Apps" title="Document" />
        <div className="ml-auto m-5">
          <Button variant="contained" onClick={()=>{navigate("/documents/create")}} >Create Document</Button>
        </div>
        <Table dataSource={_documentReducer.documents} columns={columns} />;
      </div>
    );
  };

  export default Landing;