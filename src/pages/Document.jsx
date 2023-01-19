import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import { Table } from 'antd';

import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from '../redux';

import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
  Search,
  Toolbar,
} from '@syncfusion/ej2-react-grids';

import { Header } from '../components';
import { documentsData, contextMenuItems, documentGrid } from '../data/data';

const docType = [
  {
    value: 'Test',
    label: 'Test',
  },
  {
    value: 'Test2',
    label: 'Test2',
  },
];

const docCatagery = [
  {
    value: 'Test Report',
    label: 'Test Report',
  },
  {
    value: 'Test Report 2',
    label: 'Test Report 2',
  },
];

const Document = () => {
  const [type, setDocType, doCategory] = React.useState('Test');
  const handleChange = (event) => {
    setDocType(event.target.value);
  };
  return (
    <div className=" m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Document" />
      <Button variant="contained" size="large">
        Create
      </Button>
    </div>
  );
};

export default Document;
