import React from 'react';

const CreateBlog = () => {
    return(
        <>
        <header style={{padding: '0.5rem', marginBottom: '1rem'}}>
            Blog
        </header>
        
        <form style={{backgroundColor: 'green', padding: '1rem'}}>
            <input type='text' placeholder='Blog Title'/>
            <input type='text' placeholder='Author'/>
            <input type='text' placeholder='description'/>
            <button type='submit'>
                Create Blog
            </button>
        </form>
        </>
    )
}

export default CreateBlog;