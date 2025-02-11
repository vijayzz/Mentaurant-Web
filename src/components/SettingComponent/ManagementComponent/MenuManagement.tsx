import { useState } from 'react';
import './MenuManagement.css';
import soup from '../../../assets/images/soup.svg';
import indianfood from '../../../assets/images/indianfoodimg.svg';
import breads from '../../../assets/images/breads.svg';
import cakes from '../../../assets/images/cakes.svg';
import icecream from '../../../assets/images/icecream.svg';
import deletebox from '../../../assets/images/deletebox.svg';
import editimg from '../../../assets/images/editimg.svg';

export default function MenuManagement() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isChecked, setIsChecked] = useState(false);

    // State for modals
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [editPrice, setEditPrice] = useState('');
    const [foodCategory] = useState('');

    const handleSelect = (id: any) => {
        setSelectedCategory(id);
    };

    const openEditModal = () => setShowEditModal(true);
    const closeEditModal = () => setShowEditModal(false);

    const openDeleteModal = () => setShowDeleteModal(true);
    const closeDeleteModal = () => setShowDeleteModal(false);

    return (
        <div>
            <div className="menu-flex">
                <div className='category'>
                    <p className='category-para'>Category</p>
                    <div className='image-category'>
                        {[{ id: 'soup', img: soup, name: 'Soup(10)' },
                        { id: 'indianfood', img: indianfood, name: 'Indian Foods(10)' },
                        { id: 'breads', img: breads, name: 'Breads(10)' },
                        { id: 'cakes', img: cakes, name: 'Cakes(10)' },
                        { id: 'icecream', img: icecream, name: 'Ice Cream(10)' }]
                            .map((item) => (
                                <div
                                    key={item.id}
                                    className={`category-item ${selectedCategory === item.id ? 'selected' : ''}`}
                                    onClick={() => handleSelect(item.id)}
                                >
                                    <img src={item.img} alt={item.name} />
                                    <span>{item.name}</span>
                                </div>
                            ))}
                    </div>
                </div>
                <div className='available'>
                    <p className='availabe-para'>Available</p>
                    <p className='more-para'>Move <span className='arrow'> &#8594;</span></p>
                    <div className='foodchecks'>
                        {[ "Veg Soup",
                            "Chicken Soup",
                            "Mutton Soup",
                            "Prawn Soup",
                            "Crab Soup",
                            "Mushroom Soup",
                            "Baby Corn Soup"]
                            .map((soupName, index) => (
                                <div key={index}>
                                    <input type="checkbox" id={`foodcheckbox-${index}`} className='checkbox' />
                                    <img src={soup} alt={soupName} />
                                    <label htmlFor={`foodcheckbox-${index}`}>{soupName}</label>
                                </div>
                            ))}
                    </div>
                </div>
                <div className='action'>
                    <div className='action-child'>
                        <p>Selected items</p>
                        <p>price</p>
                        <p>Status</p>
                        <p>Action</p>
                    </div>
                    <div className='action-child1'>
                        <img src={soup} alt="" /><span className='soup'>Veg Soup</span>
                        <div>
                            <p style={{ position: 'relative', right: '41px' }}>₹150 </p>
                        </div>

                        <div
                            className={`toggle-switch ${isChecked ? "on" : "off"}`}
                            onClick={() => setIsChecked(!isChecked)}
                        >
                            <div className={`switch ${isChecked ? "switch-on" : "switch-off"}`}></div>
                        </div>

                        <div className='actionbox'>
                            <img src={editimg} alt="editimg" onClick={openEditModal} />
                            <img src={deletebox} alt="deletebox" onClick={openDeleteModal} />
                        </div>
                    </div>
                </div>

            </div>

            {/* Edit Modal */}
                {showEditModal && (
                    <div className="modal-container">
                        <div className="modal-content">
                            <h3>Edit Price</h3>
                            <h4>{foodCategory}Veg Soup Price</h4> {/* Display the food category dynamically */}
                            <div className="modal-input">
                                <input 
                                    type="text" 
                                    value={editPrice} 
                                    onChange={(e) => setEditPrice(e.target.value)} 
                                    placeholder="₹" 
                                />
                            </div>
                           
                            <div className="modal-buttons">
                                <button onClick={closeEditModal} style={{backgroundColor:'white' , color:"black" ,border:"1px solid black"}}>Cancel</button>
                                <button onClick={closeEditModal}>Confirm</button>
                            </div>
                        </div>
                    </div>
                )}


            {/* Delete Modal */}
            {showDeleteModal && (
                <div className="modal-container">
                    <div className="modal-content">
                        <h3>Are you sure you want to delete Veg Soup?</h3>
                        <div className="modal-buttons">
                            <button onClick={closeDeleteModal}>Cancel</button>
                            <button onClick={closeDeleteModal}>Confirm</button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
