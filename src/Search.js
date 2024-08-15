import React from "react"
import "./Search.css"

export default function Search(){
    return(
     <form>
        <div className="row">
        <div className="col-9">
        <input type="Search" placeholder="Search for a City..." className="form-control input-search" autoFocus="on" />
        </div>
        <div className="col-3">
        <input type="submit" value="Search" className=" btn btn-primary" />
        </div>
        </div>
     </form>
    );
}