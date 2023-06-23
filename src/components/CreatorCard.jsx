import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaYoutube, FaInstagram, FaTwitter, FaInfoCircle, FaEdit } from 'react-icons/fa';

import Modal from './Modal.jsx';

import './CreatorCard.css';

const CreatorCard = ({ creator }) => {
    const { id, name, image_url, description, instagram, twitter, youtube } = creator;

    /**
     * State for the modal
     */
    const [modalOpen, setModalOpen] = useState(false);

    /**
     * Open the modal
     */
    const openModal = () => {
        setModalOpen(true);
    };

    /**
     * Close the modal
     */
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <div className="Card">
                <img className="image" src={image_url} alt={name} />
                <h2 className="name">{name}</h2>
                <p className="description">{description}</p>

                <div className="bottom-icons">
                    <div className="socials">
                        {youtube && (
                            <a href={'https://www.youtube.com/' + youtube} target='_blank' rel='noreferrer'>
                                <FaYoutube className='icon' />
                            </a>
                        )}
                        {instagram && (
                            <a href={'https://www.instagram.com/' + instagram} target='_blank' rel='noreferrer'>
                                <FaInstagram className='icon' />
                            </a>
                        )}
                        {twitter && (
                            <a href={'https://www.twitter.com/' + twitter} target='_blank' rel='noreferrer'>
                                <FaTwitter className='icon' />
                            </a>
                        )}
                    </div>

                    <div className="action-icons">
                        {/* <Link to={'/detail/' + id} className='icon'>
                            <FaInfoCircle />
                        </Link> */}
                        <button onClick={openModal} className='icon'>
                            <FaInfoCircle />
                        </button>
                        <Link to={'/edit/' + id} className='icon'>
                            <FaEdit />
                        </Link>
                    </div>
                </div>
            </div>

            {modalOpen && (
                <Modal creator={creator} closeModal={closeModal} />
            )}
        </>
    );
}

export default CreatorCard;
