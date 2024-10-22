import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomesExpenses from './components/IncomesExpenses';
import TransactionsList from './components/TransactionsList';
import AddTransactions from './components/AddTransactions';
import { useContext } from 'react';
import GlobalProvider, { GlobalContext } from './context/GlobalContext';



function App() {
  return (
    <GlobalProvider >
      <Header/>
      <div className='container'>
        <Balance/>
        <IncomesExpenses/>
        <TransactionsList/>
        <AddTransactions/>

      </div>
    </GlobalProvider>
  );
}

export default App;
