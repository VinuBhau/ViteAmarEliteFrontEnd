
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import LoginPage from './Components/LoginPage'
import Test from './Components/test'
import Contact from './Components/Contact'
import Information from './Components/Information'
import About from './Components/About'
import AddFlatOwner from './Components/AddFlatOwner'
import AdminDashboard from './Components/AdminDashboard'
import AddEmployee from './Components/AddEmployee'
import FinancialExpenses from './Components/FinancialExpenses'
import FinancialYear from './Components/FinancialYear'
import AddApartmentDetails from './Components/AddApartmentDetails'
import AddOwner from './Components/AddOwner'
import Chairman from './Components/Chairman'
import Secretary from './Components/Secretary'
import Owner from './Components/Owner'
import Visitors from './Components/Security'
import SendReminder from './Components/SendRemainder'
import AddExpense from './Components/AddExpense'
import MakeEmpSalary from './Components/MakeEmpSalary'
import RaiseDemand from './Components/RaiseDemand'
import ViewComplaints from './Components/ViewComplaints'
import PaymentDue from './Components/PaymentDue'
import Financialdata from './Components/FinancialData'
import Complaint from './Components/Complaint'
import OwnerServices from './Components/OwnerServices'
import TempDisplay from './Components/TempDisplay'
import GasSensorInfo from './Components/GasSensorInfo'
import OwnerPayment from './Components/OwnerPayment'
function App() {



  return (
    <div>
    <Routes>
      <Route path = '/' element ={<Home/>}/>
      <Route path = '/login' element = {<LoginPage/>}/>
      <Route path = '/test' element = {<Test/>}/>
      <Route path = '/adminDashboard' element ={<AdminDashboard/>}/>
      <Route path = '/add-employee' element ={<AddEmployee/>}/>
      <Route path = '/financial-expenses' element ={<FinancialExpenses/>}/>
      <Route path = '/financial-year' element ={<FinancialYear/>}/>
      <Route path = '/add-apartment' element ={<AddApartmentDetails/>}/>
      <Route path = '/add-owner' element ={<AddOwner/>}/>
      <Route path = '/chairman' element ={<Chairman/>}/>
      <Route path = '/secretary' element ={<Secretary/>}/>
      <Route path = '/owner' element ={<Owner/>}/>
      <Route path = '/security' element ={<Visitors/>}/>
      <Route path = '/contact' element ={<Contact/>}/>
      <Route path = '/information' element ={<Information/>}/>
      <Route path = '/about' element ={<About/>}/>
      <Route path = '/add-flat-owner' element ={<AddFlatOwner/>}/>
      <Route path = '/send-reminder' element ={<SendReminder/>}/>
      <Route path = '/add-expense' element ={<AddExpense/>}/>
      <Route path = '/make-salary' element ={<MakeEmpSalary/>}/>
      <Route path = '/raise-demand' element ={<RaiseDemand/>}/>
      <Route path = '/view-lodgedcomplaints' element ={<ViewComplaints/>}/>
      <Route path = '/view-paymentdues' element ={<PaymentDue/>}/>
      <Route path = '/financial-data' element ={<Financialdata/>}/>
      <Route path = '/lodge-complaint' element ={<Complaint/>}/>
      <Route path = '/ownerServices' element ={<OwnerServices/>}/>
      <Route path = '/view-temp' element ={<TempDisplay/>}/>
      <Route path = '/gas-info' element ={<GasSensorInfo/>}/>
      <Route path = '/pay-maintainence' element ={<OwnerPayment/>}/>


      





    </Routes>
    </div>
  )
}

export default App
