import React from "react";
import { MDBCol } from "mdb-react-ui-kit";
import { sendApiRequest } from "../../recipeApiHandler/recipeApiHandler";

const SearchBar = () => {
  
  return (
    <>
    <button onClick={sendApiRequest}> click me</button>
    <MDBCol md="6" >
      <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
    </MDBCol>

    </>
  );
}

export default SearchBar;