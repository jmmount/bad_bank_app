function Deposit() {
  const [status, setStatus] = React.useState("");
  const [balance, setBalance] = React.useState(100);
  const [transactionState, setTransactionState] = React.useState("");
  const ctx = React.useContext(UserContext); 

  const validate = (field, label) => {
    if (!field.trim()) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 5000);
      return false;
    }

    if (field < 0) {
      setStatus("Please enter a positive number!");
      setTimeout(() => setStatus(""), 5000);
      return false;
    }

    if (!/^\d+(\.\d+)?$/.test(field)) {
      setStatus("Please enter a numeric value!");
      setTimeout(() => setStatus(""), 5000);
      return false;
    }

    setStatus("Your deposit is successful!");
    setTimeout(() => setStatus(""), 5000);
    return true;
  };



  const handleChange = (event) => {
    setTransactionState(event.target.value);
  };

  const handleSubmit = () => {
    if (validate(transactionState, "Deposit Amount")) {
      setBalance(balance + Number(transactionState));
      setTransactionState("");
      handleBalance();
      
     
    }
  };

  const handleBalance = () => {
    const newBalance = balance + Number(transactionState);
    setBalance(newBalance);
    ctx.users[0].balance = newBalance;
  };

  

  return (
    <Card
      bgcolor="warning"
      txtcolor="black"
      header="Deposit"
      status={status}
      headerBgColor="white"
      onSubmit={handleSubmit}
      body={
        <>
          <h2 id="Balance">Balance: ${balance}</h2>
          Deposit Amount
          <br />
          <input
            type="text" // Change type to "text" to allow letter inputs
            value={transactionState}
            onChange={handleChange}
            className="form-control"
            id="deposit"
            placeholder="Deposit Amount"
          />
          <br></br>
          <button
            type="submit"
            value="submit"
            className="btn btn-light"
            onClick={handleSubmit}
          >
            Deposit
          </button>
        </>
      }
    />
  );
}
