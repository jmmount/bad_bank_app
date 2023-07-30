function Withdraw() {
  const [status, setStatus] = React.useState('');
  const [balance, setBalance] = React.useState(100);
  const [transactionState, setTransactionState] = React.useState('');

  const validate = (field, label) => {
    if (!field.trim()) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''), 5000);
      return false;
    }
  
    const amountToWithdraw = Number(field);
    if (isNaN(amountToWithdraw)) {
      setStatus('Please enter a numeric value!');
      setTimeout(() => setStatus(''), 5000);
      return false;
    }
  
    if (amountToWithdraw <= 0) {
      setStatus('Invalid withdrawal amount!');
      setTimeout(() => setStatus(''), 5000);
      return false;
    }
  
    if (amountToWithdraw > balance) {
      setStatus('Insufficient funds!');
      setTimeout(() => setStatus(''), 5000);
      return false;
    }
  
    setStatus('Thank you for banking with Bad Bank!');
    setTimeout(() => setStatus(''), 5000);
    return true;
  };
  

  const handleChange = (event) => {
    setTransactionState(event.target.value);
  };

  const handleSubmit = () => {
    if (validate(transactionState, 'Withdraw Amount')) {
      const amountToWithdraw = Number(transactionState);
      setBalance(balance - amountToWithdraw);
      setTransactionState('');
    }
  };

  return (
    <Card
      bgcolor="warning"
      txtcolor="black"
      header="Withdraw"
      status={status}
      headerBgColor="white"
      onSubmit={handleSubmit}
      body={
        <>
          <h2 id="Balance">Balance: ${balance}</h2>
          Withdraw Amount
          <br />
          <input
            type="text" // Change type to "text" to allow letter inputs
            value={transactionState}
            onChange={handleChange}
            className="form-control"
            id="withdraw"
            placeholder="Withdrawal Amount"
          />
          <br></br>
          <button
            type="submit"
            value="submit"
            className="btn btn-light"
            onClick={handleSubmit}
          >
            Withdraw
          </button>
        </>
      }
    />
  );
}
