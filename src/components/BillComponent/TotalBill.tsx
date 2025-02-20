import PersonBill from "./PersonBill";
import RoleComponent from "./RoleComponent";
import TotalAmount from "./TotalAmount";

export default function TotalBill() {
    return (
        <div style={{background:'#EDFBFA',width:'42%',marginLeft:'1%',borderRadius:'5px',marginTop:'-30px'}}>
            <PersonBill />
            <RoleComponent/>
            <TotalAmount />
        </div>
    )
}