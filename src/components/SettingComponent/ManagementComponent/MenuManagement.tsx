import { useState } from "react";
import { Modal, Input, Button } from "antd";
import "./MenuManagement.css";
import soup from "../../../assets/images/soup.svg";
import deletebox from "../../../assets/images/deletebox.svg";
import editimg from "../../../assets/images/editimg.svg";

// Food categorization
const allFoodItems = {
    soup: [
        { id: "vegSoup", name: "Vegetable Soup", img: soup, type: "veg", price: 500 },
        { id: "mushroomSoup", name: "Mushroom Soup", img: soup, type: "veg", price: 500 },
        { id: "chickenSoup", name: "Chicken Soup", img: soup, type: "non-veg", price: 500 },
        { id: "muttonSoup", name: "Mutton Soup", img: soup, type: "non-veg", price: 500 },
    ],
    indianfood: [
        { id: "paneerTikka", name: "Paneer Tikka", img: soup, type: "veg", price: 500 },
        { id: "dalMakhani", name: "Dal Makhani", img: soup, type: "veg", price: 500 },
    ],
};

export default function MenuManagement() {
    // Set the selected category type to one of the keys of `allFoodItems`
    const [selectedCategory, setSelectedCategory] = useState<keyof typeof allFoodItems | null>(null);
    const [checkedItems, setCheckedItems] = useState<string[]>([]);
    const [selectedItems, setSelectedItems] = useState<{ id: string; name: string; type: string; price: number }[]>([]);

    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<{ id: string; name: string; type: string; price: number } | null>(null);
    const [itemToEdit, setItemToEdit] = useState<{ id: string; name: string; type: string; price: number } | null>(null);
    const [editedPrice, setEditedPrice] = useState("");

    // Handle category selection
    const handleSelect = (id: keyof typeof allFoodItems) => {
        setSelectedCategory(id);
        setCheckedItems([]);
    };

    // Handle checkbox selection
    const handleCheckboxChange = (id: string) => {
        setCheckedItems((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    // Move items to selected list
    const handleMove = () => {
        if (!selectedCategory) return;
        const itemsToMove = allFoodItems[selectedCategory].filter((item) => checkedItems.includes(item.id));
        setSelectedItems((prev) => [...prev, ...itemsToMove]);
        setCheckedItems([]);
    };

    // Open delete confirmation modal
    const showDeleteConfirm = (item: { id: string; name: string; type: string; price: number }) => {
        setItemToDelete(item);
        setDeleteModalVisible(true);
    };

    // Confirm delete action
    const handleDeleteConfirm = () => {
        setSelectedItems((prev) => prev.filter((item) => item.id !== itemToDelete?.id));
        setDeleteModalVisible(false);
    };

    // Open edit modal
    const showEditModal = (item: { id: string; name: string; type: string; price: number }) => {
        setItemToEdit(item);
        setEditedPrice(item.price.toString());
        setEditModalVisible(true);
    };

    // Confirm edit action
    const handleEditConfirm = () => {
        if (itemToEdit) {
            setSelectedItems((prev) =>
                prev.map((item) =>
                    item.id === itemToEdit.id ? { ...item, price: parseFloat(editedPrice) } : item
                )
            );
        }
        setEditModalVisible(false);
    };

    // Get available items based on selected category
    const availableItems = selectedCategory ? allFoodItems[selectedCategory] : [];

    return (
        <div>
            <div className="menu-flex">
                {/* Category Section */}
                <div className="category">
                    <p className="category-para">Category</p>
                    <div className="image-category">
                        {[
                            { id: "soup", img: soup, name: "Soup(10)" },
                            { id: "indianfood", img: soup, name: "Indian Foods(10)" },
                        ].map((item) => (
                            <div
                                key={item.id}
                                className={`category-item ${selectedCategory === item.id ? "selected" : ""}`}
                                onClick={() => handleSelect(item.id as keyof typeof allFoodItems)}
                            >
                                <img src={item.img} alt={item.name} />
                                <span>{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Available Section */}
                <div className="available">
                    <p className="availabe-para">Available</p>
                    <p className="more-para" onClick={handleMove}>
                        Move <span className="arrow"> &#8594;</span>
                    </p>
                    <div className="foodchecks">
                        {availableItems.map((item) => (
                            <div key={item.id}>
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    checked={checkedItems.includes(item.id)}
                                    onChange={() => handleCheckboxChange(item.id)}
                                />
                                <img src={item.img} alt={item.name} />
                                <label>{item.name}</label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Selected Items Section */}
                <div className="selected-items" style={{ flex: "23%", padding: "5px" }}>
                    <div className="selected-header">
                        <p>Selected Items</p>
                        <p>Price</p>
                        <p>Status</p>
                        <p>Action</p>
                    </div>

                    <div className="selected-list">
                        {selectedItems.map((item) => (
                            <div key={item.id} className="selected-item">
                                <img src={soup} alt={item.name} className="food-image" />

                                <div className="food-details">
                                    <span className="selectedfood">{item.name}</span>
                                    <p className="food-price">₹{item.price}</p>
                                </div>

                                <label className="switch">
                                    <input type="checkbox" defaultChecked className={`toggle-${item.type}`} />
                                    <span className="slider round"></span>
                                </label>

                                <div className="actionbox">
                                    <img src={editimg} alt="edit" className="editimgg" onClick={() => showEditModal(item)} />
                                    <img src={deletebox} alt="delete" className="deletebox" onClick={() => showDeleteConfirm(item)} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Delete Confirmation Modal */}
            <Modal
                title="Confirm Deletion"
                visible={deleteModalVisible}
                onCancel={() => setDeleteModalVisible(false)}
                footer={[
                    <Button key="cancel" className="cancelbutton" onClick={() => setDeleteModalVisible(false)}>
                        Cancel
                    </Button>,
                    <Button key="confirm" className="confirmbutton" style={{ backgroundColor: "#DA3743", color: "#fff" }} onClick={handleDeleteConfirm}>
                        Confirm
                    </Button>,
                ]}
            >
                <p>Are you sure you want to delete this item?</p>
            </Modal>

            {/* Edit Item Modal */}
            <Modal
                title="Edit Price"
                visible={editModalVisible}
                onCancel={() => setEditModalVisible(false)}
                footer={[
                    <Button key="cancel" className="cancelbutton" onClick={() => setEditModalVisible(false)}>
                        Cancel
                    </Button>,
                    <Button key="confirm" className="confirmbutton" style={{ backgroundColor: "#DA3743", color: "#fff" }} onClick={handleEditConfirm}>
                        Confirm
                    </Button>,
                ]}
            >
                <p>Enter new price:</p>
                <Input
                    type="number"
                    value={editedPrice}
                    onChange={(e) => setEditedPrice(e.target.value)}
                />
            </Modal>
        </div>
    );
}
