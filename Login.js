function Login () {
    return (
        <Card
        bgcolor="warning"
        txtcolor="black"
        header="Login"
        status={status}
        headerBgColor="white"
        onSubmit={null}
        body={
          <>
            <h2 id="Login">Login</h2>
            Email
            <br />
            <input
              type="text" // Change type to "text" to allow letter inputs
              value={null}
              onChange={null}
              className="form-control"
              id="email"
              placeholder="Enter email"
            />
            <br></br>
            <input
              type="text" // Change type to "text" to allow letter inputs
              value={null}
              onChange={null}
              className="form-control"
              id="password"
              placeholder="Enter password"
            />
            <br></br>
            <button
              type="submit"
              value="submit"
              className="btn btn-light"
              onClick={null}
            >
              Login
            </button>
          </>
        }
      />
    );
}