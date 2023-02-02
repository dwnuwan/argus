import React, { useEffect } from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import {
  Navbar,
  Footer,
  sidebar,
  ThemeSettings,
  Sidebar,
  Chat,
  Notification,
} from './components';


import {
  Audit,
  Document,
  Policy,
  Training,
  CheckList,
  Task,
  RiskAssesment,
  User,
  Role,
  Permision,
  General,
} from './pages';

//import {Test} from './pages/documents/Test';
import {Create,Detail,Landing,Test} from './pages/documents';


import { useStateContext } from './contexts/ContextProvider';

import './App.css';

const App = () => {
  const { activeMenu } = useStateContext();

 

  return (
    <Provider store={ store }>
   
      <BrowserRouter>
      
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000 ' }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: 'white', borderRadius: '50%' }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              
            <Navbar />
            </div>

            <div>
              <Routes>
                {/* App */}
                <Route path="/" element={<Audit />} />
                <Route path="/audit" element={<Audit />} />
               
                <Route path="/policy" element={<Policy />} />
                <Route path="/training" element={<Training />} />

                {/* Tools */}
                <Route path="/check list" element={<CheckList />} />
                <Route path="/task" element={<Task />} />
                <Route path="/risk assesment" element={<RiskAssesment />} />

                {/* Tools */}
                <Route path="/user" element={<User />} />
                <Route path="/role" element={<Role />} />
                <Route path="/permision" element={<Permision />} />
                <Route path="/general" element={<General />} />
                <Route path="/documents" element={<Landing />} />
                <Route path="/documents/create" element={<Create />} />
                <Route path="/documents/:id" element={<Detail />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
   
    </Provider>
  );
};

export default App;
