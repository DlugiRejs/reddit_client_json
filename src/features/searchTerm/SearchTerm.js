import React from 'react';
import { headerStyles, searchTermStyles } from "../../styles/styles.js"
import PropTypes from 'prop-types';


export function SearchTerm({ searchTerm, onChange, hobby }) {

    let styles = headerStyles(hobby);

    const handleUserInput = (e) => {
        onChange(e.target.value);
    }

    return (
        <div>
            <div className="lower_header" style={styles}></div>
            <header style={styles}>
                <span className="AppName">Client for Reddit</span>
                <input
                    className="SearchInput"
                    style={searchTermStyles(hobby)}
                    type="text"
                    id="search"
                    name="search"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleUserInput}
                />
            </header>
        </div>
    );
}

SearchTerm.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    hobby: PropTypes.string.isRequired
}