
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import LoginPage from './Components/LoginPage'
import Test from './Components/test'
import Contact from './Components/Contact'
import Information from './Components/Information'
import About from './Components/About'
function App() {



  return (
    <div>
    <Routes>
      <Route path = '/' element ={<Home/>}/>
      <Route path = '/login' element = {<LoginPage/>}/>
      <Route path = '/test' element = {<Test/>}/>
      {/* <Route path = '/adminDashboard' element ={<AdminDashboard/>}/>
      <Route path = '/chairman' element ={<Chairman/>}/>
      <Route path = '/secretary' element ={<Secretary/>}/>
      <Route path = '/owner' element ={<Owner/>}/>
      <Route path = '/security' element ={<Security/>}/> */}
      <Route path = '/contact' element ={<Contact/>}/>
      <Route path = '/information' element ={<Information/>}/>
      <Route path = '/about' element ={<About/>}/>
      {/* <Route path = '/add-flat-owner' element ={<AddFlatOwner/>}/>
      <Route path = '/add-employee' element ={<AddEmployee/>}/>
      <Route path = '/financial-year' element ={<Financialdata/>}/>
      <Route path = '/add-apartment' element ={<AddApartmentDetails/>}/>
      <Route path = '/financial-expenses' element ={<FinancialExpenses/>}/>  */}


    </Routes>
    </div>
  )
}

export default App
