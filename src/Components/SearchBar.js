import React, {Component} from 'react';
import '../style/RoutingFuncionality.css';
import '../style/App.css';

class SearchBar extends Component {
    render() {
        return(
            <div className={'searchbar'}>
                <form>
                    <input type="text" name="search" placeholder="Search for a starting point.."/>
                </form>

            </div>
        )
    }
}
export default SearchBar;