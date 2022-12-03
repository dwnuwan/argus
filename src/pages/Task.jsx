import React from 'react';
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from '@syncfusion/ej2-react-kanban';

import { taskData, taskGrid } from '../data/data';
import { Header } from '../components';

const Task = () => {
  return (
    <div className=" m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Task" />
      <KanbanComponent
        id="task"
        keyField="Status"
        dataSource={taskData}
        cardSettings={{
          contentField: 'Summary',
          headerField: 'Id',
        }}
      >
        <ColumnsDirective>
          {taskGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Task;
