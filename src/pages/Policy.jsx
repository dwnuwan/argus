import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import API_PATH from '../redux/api';
import Board from '../components/Board'
import {KanbanComponent,ColumnsDirective,ColumnDirective} from '@syncfusion/ej2-react-kanban'
import { DataManager, WebApiAdaptor,UrlAdaptor } from '@syncfusion/ej2-data';
import {fetchDataAction} from '../redux'

const Policy = () => {
  const data = useSelector(state => state.data);
  const error = useSelector(state => state.error);

  // Create a DataManager instance and bind it to the Kanban component
  const dataManager = new DataManager({
    url: `${API_PATH}TaskMaster/GetAll`,
    updateUrl: `${API_PATH}TaskMaster/Update/`,
    removeUrl: `${API_PATH}TaskMaster/Delete`,
    adaptor: new UrlAdaptor(),
    crossDomain: true,
  });

  const dispatch = useDispatch();
  useEffect(() => {
   // dispatch(fetchDataAction());
  }, [dispatch]);
  
  let kanban;
  return <div>
            <KanbanComponent id="kanban" dataSource={dataManager.dataSource}  keyField="status" cardSettings={{ contentField: "status", headerField: "name" }}>
                <ColumnsDirective>
                  <ColumnDirective headerText="ToDo" keyField="Todo"/>
                  <ColumnDirective headerText="InProgress" keyField="Inprogress"/>
                  <ColumnDirective headerText="Completed" keyField="Completed"/>
                
                </ColumnsDirective>
            </KanbanComponent>;
    </div>;
};

export default Policy;
