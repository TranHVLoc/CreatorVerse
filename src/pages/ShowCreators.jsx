import React, { useState, useEffect } from 'react'

import { supabase } from '../client.js'
import CreatorCard from '../components/CreatorCard'

import './ShowCreators.css'

const ShowCreators = ({ creator, setCreator }) => {

    /* State to store the search value */
    const [input, setInput] = useState('');

    /* State to store the creators */
    const [filteredCreators, setFilteredCreators] = useState(creator)

    /* Function to fetch the creators from the database */
    /* This function is asynchronous, which means it will */
    /* take some time to complete. We need to use the */
    /* keyword `await` to wait for the function to complete. */
    useEffect(() => {
        const fetchCreators = async () => {
            try {
                const { data, error } = await supabase
                    .from('Creators')
                    .select()
                    .order('created_at', { ascending: true })
                
                setCreator(data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchCreators()
    }, [])

    /* Function to handle when the search area to filter result is inputted */
    /* This function will filter the creators based on the search value */
    const searchCreators = (searchValue) => {
        setInput(searchValue);
        if (searchValue !== '') {
            const filteredData = creator.filter((creator) =>
                creator.name
                .toLowerCase().includes(searchValue.toLowerCase())
            );
            setFilteredCreators(filteredData);
        } else {
            setFilteredCreators(creator);
        }
    }        


    return (
        <div className='show-creators'>
            {/* The search bar to look for desired creator */}
            <input
                type='text'
                placeholder='Search creators'
                value={input}
                onChange={(e) => searchCreators(e.target.value)}
            />
            {/* The list of creators */}
            <div className='creator-list'>
                {
                    input === '' ?
                    <>
                        {creator && creator.length > 0 ?
                            creator.map((creator) => (
                                <CreatorCard creator={creator} />
                            ))
                        :
                            <p>No creators created yet!</p>
                        }
                    </>
                    :
                    <>
                        {
                            filteredCreators && filteredCreators.length > 0 ?
                                filteredCreators.map((card) => (
                                    <CreatorCard creator={card} />
                                ))
                            :
                                <p>No creators found</p>
                        }
                    </>
                }
            </div>
        </div>
    )
}

export default ShowCreators