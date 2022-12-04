import './App.css';
import { RouterProvider } from 'react-router-dom'
import router from './Routes/AllRoutes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App bg-[#FFFFFF]">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
