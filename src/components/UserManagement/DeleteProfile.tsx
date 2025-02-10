import { Button, Modal } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { appImages } from "../../globals/appImages";
import "./DeleteProfile.css";
import { deleteUser } from "../../actions/userAction";
import { useDispatch } from "react-redux";

export default function DeleteProfile({ open, setOpen, user, }: any) {
    const dispatch = useDispatch()
    const handleConfirmDelete = () => {
        if (!user) return;
        console.log("Deleting user:", user);
        dispatch(deleteUser(user.id));  
        setOpen(false);
    };
    return (
        <Modal
            title={
                <div className="delete-title-container" style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #FFF2F3" }}>
                    <p className="delete-profile-text">Delete Profile</p>
                    <p className="delete-close-button">
                        <CloseOutlined onClick={() => setOpen(false)} />
                    </p>
                </div>
            }
            open={open}
            onCancel={() => setOpen(false)}
            footer={null}
            centered
            width={400}
            closable={false}
        >
            <div className="delete-content">
                <p className="delete-text">
                    Are you sure <span style={{ color: "#DA3743" }}>Delete</span>{" "}
                    <img src={appImages.usertableImg} alt="User Profile" /> {user?.name} profile?
                </p>
            </div>
            <div>
                <Button type="default" className="delete-cancel-btn" onClick={() => setOpen(false)}>
                    Cancel
                </Button>
                <Button type="primary" danger className="save-btn" onClick={handleConfirmDelete}>
                    Confirm
                </Button>
            </div>
        </Modal>
    );
}
