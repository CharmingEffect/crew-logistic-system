<form className="form-inline" onSubmit={(e) => onSubmit(e)}>
  <p>
    Ones the user is created he will recive confirmation email. Needs to click
    on a link to activate account.
  </p>
  <div className="form-group">
    <label for="name">Name</label>
    <input
      type="name"
      className="form-control"
      id="name"
      placeholder="Enter name"
    ></input>
  </div>
  <div className="">
    <div className="">
      <label className="">Email</label>
      <input
        type="email"
        className="cls-form-control"
        id="inputEmail4"
        value={email}
        name="email"
        onChange={(e) => onInputChange(e)}
        required
      />
    </div>

    {/* password is generated automaticaly and sent to via user email */}
  </div>
  <div className="form-row">
    <div className="form-group">
      <label>First Name</label>
      <input
        type="firstName"
        className="cls-form-control"
        id="inputEmail4"
        value={firstName}
        name="firstName"
        onChange={(e) => onInputChange(e)}
        required
      />
    </div>

    <div className="form-group">
      <label>Last Name</label>
      <input
        type="lastName"
        className="form-control"
        id="inputPassword4"
        value={lastName}
        name="lastName"
        onChange={(e) => onInputChange(e)}
        required
      />
    </div>
  </div>
  <div className="form-group">
    {" "}
    <br></br>
    <label className="font-weight-2">Address</label>
    <br></br>
    <label>Street</label>
    <input
      type="text"
      className="form-control"
      id="inputAddress"
      value={street}
      name="street"
      onChange={(e) => onInputChange(e)}
      required
    />
  </div>
  <div className="form-group">
    <label>City</label>
    <input
      type="text"
      className="form-control"
      id="inputAddress2"
      value={city}
      name="city"
      onChange={(e) => onInputChange(e)}
      required
    />
  </div>
  <div className="form-row">
    <div className="form-group">
      <label>Country</label>
      <input
        type="text"
        className="form-control"
        id="inputCity"
        value={country}
        name="country"
        onChange={(e) => onInputChange(e)}
        required
      />
    </div>
    <div className="form-group">
      <label>Status</label>
      <select
        value={role}
        name="role"
        onChange={(e) => onInputChange(e)}
        id="inputState"
        className="form-control"
        required
      >
        {" "}
        <option></option>
        <option>ADMIN</option>
        <option>CREW_MEMBER</option>
      </select>
    </div>
    <div className="form-group">
      <label>Zip</label>
      <input
        type="text"
        className="form-control"
        id="inputZip"
        value={zipCode}
        name="zipCode"
        onChange={(e) => onInputChange(e)}
        required
      />
    </div>
  </div>
  <div className="d-flex justify-content-end mt-3">
    <br></br>
    <Button type="submit" className="button-color">
      Submit
    </Button>
  </div>
</form>;
