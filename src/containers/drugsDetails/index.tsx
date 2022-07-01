import { Link } from "react-router-dom";

const DrugsDetails =()=>{
    return(
        <div>
            <h1>drugDetails</h1>
            <Link to='/create-drug'>CreateDrug</Link>
            <Link to='/update-drug'>UpdateDrug</Link>
        </div>
    )
}
export default DrugsDetails;