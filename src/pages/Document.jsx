import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';

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

      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 2, width: '46ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-disabled"
            label="Name"
            defaultValue="Name"
            color="primary"
          />
          <TextField
            id="outlined-disabled"
            select
            label="Type"
            value={type}
            onChange={handleChange}
            helperText=""
          >
            {docType.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-disabled"
            select
            label="Category"
            value={doCategory}
            onChange={handleChange}
            defaultValue=" "
            helperText=""
          >
            {docCatagery.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            required
            id="filled-number"
            label="Alert Before"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            required
            id="outlined-disabled"
            label="Name"
            defaultValue="Name"
            color="primary"
          />
          <TextField
            required
            id="outlined-disabled"
            label="Responsible Person"
            defaultValue="Name"
            color="primary"
          />
          <TextField
            required
            id="filled-number"
            label="Valid Period (Months)"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">Months</InputAdornment>
              ),
            }}
          />
          <TextField
            required
            id="filled-number"
            label="Alert Before (Days)"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">Days</InputAdornment>
              ),
            }}
          />
          <TextField
            id="outlined-multiline-static"
            label="Introduction"
            multiline
            rows={4}
            defaultValue=" "
          />
        </div>
      </Box>
      <div class="pt-14 ...">
        <GridComponent
          id="gridcomp"
          dataSource={documentsData}
          allowPaging
          allowSorting
          toolbar={['Search']}
          width="auto"
        >
          <ColumnsDirective>
            {documentGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject
            services={[
              Resize,
              Sort,
              ContextMenu,
              Filter,
              Page,
              ExcelExport,
              Edit,
              PdfExport,
              Search,
              Toolbar,
            ]}
          />
        </GridComponent>
      </div>
    </div>
  );
};

export default Document;
