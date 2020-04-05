import React from 'react';

const MovieTabs = ({sort_by, updateSortBy}) => {

    const handleClick = (value) => () => {
            updateSortBy(value);
        }
        
    const getClassLink = (value) => {
       return  `nav-link ${sort_by === value ? 'active' : ''}`
    }
    return (
        <ul className="tabs nav nav-pills">
            <li className="nav-item">
                <div 
                    onClick={ 
                         handleClick('popularity.desc')
                       //() => {updateSortBy('popularity.desc')};
                    } 
                    className={getClassLink('popularity.desc')}>
                    Popularity desc
                </div>
            </li>
            <li className="nav-item">
                <div 
                    onClick={ handleClick('revenue.desc')}
                    className={getClassLink('revenue.desc')}>
                    Revenue desc
                </div>
            </li>
            <li className="nav-item">
                <div 
                    onClick={handleClick('vote_average.desc')}
                    className={getClassLink('vote_average.desc')}>
                    Vote average desc
                </div>
            </li>
        </ul>
    )
}

export default MovieTabs;
