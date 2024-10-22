import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomesExpenses from './components/IncomesExpenses';
import TransactionsList from './components/TransactionsList';
import AddTransactions from './components/AddTransactions';

function App() {
  return (
    <div >
      <Header/>
      <div className='container'>
        <Balance/>
        <IncomesExpenses/>
        <TransactionsList/>
        <AddTransactions/>

      </div>
    </div>
  );
}

export default App;
