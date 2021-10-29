import React from 'react'
import SearchBar from './SearchBar';

const ProjectPage = () => {
    return (
        <div>
            <div>
                <h1>Title of Project</h1>
                <SearchBar />                
            </div>
            <div>
                <p>Task Item</p>
                <p>Task Item2</p>
                <p>Task Item3</p>
            </div>
        </div>
    )
}

export default ProjectPage;
