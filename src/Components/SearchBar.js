import React, {Component} from 'react';
import '../style/RoutingFuncionality.css';
import { FaSearch } from 'react-icons/fa';
import '../style/App.css';

class SearchBar extends Component {
    render() {
        const style = {
            backgroundImage: <FaSearch/>
        }
        return(
            <div className={'searchbar'}>
                <FaSearch/>
                <form>
                    <input type="text" name="search" placeholder="Search.." style={style}/>
                </form>

            </div>
        )
    }
}
export default SearchBar;