// import { Button , Stack } from '@mui/material'
// import { Delete , Send , Photo } from '@mui/icons-material'

// function App() {

//   return (
//     <>
//     <h1>MUI Buttons</h1>
    
//     <Stack spacing={2} direction="row">
//       <Button variant="text">Text</Button>
//       <Button variant="contained">Contained</Button>
//       <Button variant="outlined">Outlined</Button>      
//     </Stack>
    
    
//     <h1>MUI Buttons with Icons</h1>
//     <Stack spacing={2} direction="row">
//     <Button variant="text">Text</Button>
//       <Button variant="contained" startIcon={<Delete />}>Delete!</Button>
//       <Button variant="outlined" startIcon={<Send />}>Send</Button>      
//       <Button variant="outlined" startIcon={<Photo />}>Photo</Button>      
      
//     </Stack>

//     </>
//   )
// }

// export default App

import { BrowserRouter , Routes , Route } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout';
import BackendLayout from './layouts/BackendLayout';
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Report from './pages/Report'
import Product from './pages/Product'
import Setting from './pages/Setting'


const App = () => {
  return (
    <BrowserRouter>
      <Routes >
          <Route element={<AuthLayout />} >
            <Route path="/" element={ <Login />} />
          </Route>
          <Route element={<BackendLayout />} >
            <Route path="/backend" element={ <Dashboard />} />
            <Route path="/backend/product" element={ <Product />} />
            <Route path="/backend/report" element={ <Report />} />
            <Route path="/backend/setting" element={ <Setting />} />            
          </Route>
      </Routes >
    </BrowserRouter>
  )
}

export default App
