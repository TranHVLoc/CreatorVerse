import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';
import { supabase } from '../client.js';

import './EditCreator.css';

const EditCreator = ({ creator }) => {
    // Get the id from the URL
    const { id } = useParams();
    // Get the creator from the database
    const [creatorData, setCreatorData] = useState(creator.filter(item => item.id == id)[0]);

    /* Function to handle changes to the form inputs */
    // This function will be triggered when the user types in the form that will update the state of the component
    // The state of the component is the `creatorData` variable
    // The `creatorData` variable is updated using the `setCreatorData` function
    // The `setCreatorData` function is called with the updated data
    // The updated data is an object that contains the name of the input that was changed
    // and the new value of the input
    // The `name` and `value` attributes are passed to the function using the `event` object
    const handleChange = (e) => {
        setCreatorData({ ...creatorData, [e.target.name]: e.target.value });
    }

    /* Function to handle when the form is submitted */
    // This function will send the data to the database
    // This function is asynchronous, which means it will
    // take some time to complete. We need to use the
    // keyword `await` to wait for the function to complete.
    const handleSubmit = async (e) => {
        // Prevent the default from submission behaviour, which could cause the page to reload
        // or navigate to a new URL
        e.preventDefault();

        // Send the data to the database
        try {
            // Update the creator in the database
            const { data, error } = await supabase
                .from('Creators')
                .update({
                    name: creatorData.name,
                    image_url: creatorData.image_url,
                    description: creatorData.description,
                    instagram: creatorData.instagram,
                    twitter: creatorData.twitter,
                    youtube: creatorData.youtube
                })
                .eq('id', id)

            // If there's an error, log it
            if (error) {
                console.log(error);
                throw error;
            }
            // If there's no error, alert the user and redirect them to the homepage
            window.alert('Creator updated successfully!');
            // Redirect the user to the homepage
            window.location.href = '/';
        } catch (error) {
            console.log(error);
            window.alert('There was an error updating the creator');
        }

    }

    
    /* Function to handle when the creator is deleted */
    // This function will update the data to the database
    // This function is asynchronous, which means it will
    // take some time to complete. We need to use the
    // keyword `await` to wait for the function to complete.
    const deleteCreator = async (event) => {
        // Prevent the default from submission behaviour, which could cause the page to reload
        event.preventDefault();

        // Send the data to the database
        try {
            // Delete the creator in the database
            const { data, error } = await supabase
                .from('Creators')
                .delete()
                .eq('id', id)

            // If there's an error, log it
            if (error) {
                console.log(error);
                throw error;
            }
            // If there's no error, alert the user and redirect them to the homepage
            window.alert('Creator deleted successfully!');
            // Redirect the user to the homepage
            window.location.href = '/';
        } catch (error) {
            console.log(error);
            window.alert('There was an error deleting the creator');
        }
    }


    return (
        <div className='edit-creator'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={creatorData.name} onChange={handleChange} />

                <label htmlFor="image_url">Image URL</label>
                <input type="text" id="image_url" name="image_url" value={creatorData.image_url} onChange={handleChange} />

                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" value={creatorData.description} onChange={handleChange} />

                <h3>Social Media Links</h3>
                <p>Provide at least one of the creator's social media portfolio</p>

                <div className="input-icon">
                    <label htmlFor="youtube">
                        <FaYoutube className="icon" /> Youtube
                    </label>
                    <input type="text" id="youtube" name="youtube" value={creatorData.youtube} onChange={handleChange} />
                </div>

                <div className="input-icon">
                    <label htmlFor="instagram">
                        <FaInstagram className="icon" /> Instagram
                    </label>
                    <input type="text" id="instagram" name="instagram" value={creatorData.instagram} onChange={handleChange} />
                </div>

                <div className="input-icon">
                    <label htmlFor="twitter">
                        <FaTwitter className="icon" /> Twitter
                    </label>
                    <input type="text" id="twitter" name="twitter" value={creatorData.twitter} onChange={handleChange} />
                </div>

                <div className="button-container">
                    <input type="submit" value="Update Creator" />
                    <input type="button" value="Delete Creator" onClick={deleteCreator} />
                </div>
            </form>
        </div>
    );
}

export default EditCreator;