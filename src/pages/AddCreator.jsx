import React from 'react'
import { supabase } from '../client.js'
import { FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';

import './AddCreator.css'

const AddCreator = ({ creator, setCreator }) => {

    /* Function to handle when the form is submitted */
    /* This function will send the data to the database */
    /* This function is asynchronous, which means it will */
    /* take some time to complete. We need to use the */
    /* keyword `await` to wait for the function to complete. */
    /* The function takes an `event` as an argument */
    /* The `event` is the form submission event */
    const handleSubmit = async (event) => {
        // Prevent the default from submission behaviour, which could cause the page to reload
        // or navigate to a new URL
        event.preventDefault()

        // Send the data to the database
        try {
            const { data, error } = await supabase
                .from('Creators')
                .insert({
                        name: creator.name,
                        image_url: creator.image_url,
                        description: creator.description,
                        instagram: creator.instagram,
                        twitter: creator.twitter,
                        youtube: creator.youtube
                })
                .select()

            // If there's an error, log it
            if (error) {
                console.log(error)
                throw error
            }

            // If there's no error, alert the user and redirect them to the homepage
            window.alert('Creator added successfully!')
            // Redirect the user to the homepage
            window.location.href = '/'
        } catch (error) {
            console.log(error)
            window.alert('There was an error adding the creator')
        }
    }


    /* Function to handle when the form is submitted */
    const handleInputChange = (event) => {
        const { name, value } = event.target
        setCreator({ ...creator, [name]: value })
    }

    return (
        <div className='add-creator'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={creator.name} onChange={handleInputChange} />

                <label htmlFor="image_url">Image URL (Optional)</label>
                <input type="text" id="image_url" name="image_url" value={creator.image_url} onChange={handleInputChange} />

                <label htmlFor="description">Description (Optional)</label>
                <textarea id="description" name="description" value={creator.description} onChange={handleInputChange} />

                <h3>Social Media Links</h3>
                <p>Provide at least one of the creator's social media portfolio</p>

                <div className="input-icon">
                    <label htmlFor="youtube">
                        <FaYoutube className="icon" /> Youtube
                        <p>The creator's Youtube handle (without the @)</p>
                    </label>
                    <input type="text" id="youtube" name="youtube" value={creator.youtube} onChange={handleInputChange} />
                </div>

                <div className="input-icon">
                    <label htmlFor="instagram">
                        <FaInstagram className="icon" /> Instagram
                        <p>The creator's Instagram handle (without the @)</p>
                    </label>
                    <input type="text" id="instagram" name="instagram" value={creator.instagram} onChange={handleInputChange} />
                </div>

                <div className="input-icon">
                    <label htmlFor="twitter">
                        <FaTwitter className="icon" /> Twitter
                        <p>The creator's Twitter handle (without the @)</p>
                    </label>
                    <input type="text" id="twitter" name="twitter" value={creator.twitter} onChange={handleInputChange} />
                </div>

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default AddCreator