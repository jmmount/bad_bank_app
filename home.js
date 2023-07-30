function Home(){
  return (
    <Card
    bgcolor="warning"  
    txtcolor="black"
      header="Bad Bank Home"
      headerBgColor="white"
      title="Thank you for bad banking"
      text="Please create an account to get started."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
