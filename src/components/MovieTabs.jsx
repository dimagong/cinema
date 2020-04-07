import React from 'react';
import PressButton from './PressButton'


class MovieTabs extends React.Component{
    
    

    componentWillReceiveProps(nextProps, nextState){
        console.log('WillReceiveProps');
        console.log('nextProps', nextProps.sort_by);
        console.log('nextState', this.props.sort_by);
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.sort_by !== this.props.sort_by
             || nextProps.page !== this.props.page
            //  || nextState.isPressed !== this.state.isPressed
             ){
            return true;
        }else{
            return false;
        }   
    }

    

    render() {

        console.log('MovieTabs render');

        const {sort_by, updateSortBy, page, total_pages, nextString, previousString} = this.props;

        const handleClick = (value) => () => {
            updateSortBy(value);
        }
        
    const getClassLink = (value) => {
       return  `nav-link ${sort_by === value ? 'active' : ''}`
    }
    return (
        <div>
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
        <div className="row mb-4 mt-4">
            <div className="col-6 d-flex justify-content-between" role="group">
                
                    <PressButton 
                        nextString={nextString}
                         name="GO >>"
                     /> 
                     <PressButton 
                         name={`PAGE ${page}`}
                     /> 
                  
                     <PressButton 
                        previousString={previousString} 
                        name="<< BACK"
                     />
                     <PressButton 
                        name={`ALL PAGES ${total_pages}`}
                    /> 
                     
            </div>
        </div>
        </div>
    )
    }
}

// const MovieTabs = ({sort_by, updateSortBy}) => {

//     const handleClick = (value) => () => {
//             updateSortBy(value);
//         }
        
//     const getClassLink = (value) => {
//        return  `nav-link ${sort_by === value ? 'active' : ''}`
//     }
//     return (
//         <ul className="tabs nav nav-pills">
//             <li className="nav-item">
//                 <div 
//                     onClick={ 
//                          handleClick('popularity.desc')
//                        //() => {updateSortBy('popularity.desc')};
//                     } 
//                     className={getClassLink('popularity.desc')}>
//                     Popularity desc
//                 </div>
//             </li>
//             <li className="nav-item">
//                 <div 
//                     onClick={ handleClick('revenue.desc')}
//                     className={getClassLink('revenue.desc')}>
//                     Revenue desc
//                 </div>
//             </li>
//             <li className="nav-item">
//                 <div 
//                     onClick={handleClick('vote_average.desc')}
//                     className={getClassLink('vote_average.desc')}>
//                     Vote average desc
//                 </div>
//             </li>
//         </ul>
//     )
// }

export default MovieTabs;
