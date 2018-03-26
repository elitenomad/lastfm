import React from 'react';
import { fetchPopularArtists } from '../utils/api';
import ReactPaginate from 'react-paginate';
import SelectCountry from './SelectCountry';
import RepoGridForArtists from './RepoGridForArtists';

class PopularArtists extends React.Component {
    state = {
        selectedCountry: 'spain',
        artists: null,
        totalPages: 0
    };

    componentDidMount(){
        this.updateCountry(this.state.selectedCountry);
    }

    updateCountry = (country, page = 1) => {
        this.setState(() => {
            return {
                selectedCountry: country,
                artists: null,
                totalPages: 0
            }
        });

        fetchPopularArtists(country, page).then((result) => {
            this.setState(() => {
                return {
                    artists: result.data.topartists != null ? result.data.topartists.artist: [],
                    totalPages: result.data.topartists != null ? parseInt(result.data.topartists['@attr'].totalPages) : 0
                };
            })
        });
    };

    handlePageClick = (event) => {
        this.updateCountry(this.state.selectedCountry, (event.selected + 1))
    };

    render() {

        const { selectedCountry, artists } = this.state;

        return (
            <div id="popular-artists">
                <SelectCountry selectedCountry={selectedCountry} onSelect={this.updateCountry} />

                <div id='react-paginate'>
                    <ReactPaginate previousLabel={"Prev"}
                                   nextLabel={"Next"}
                                   breakLabel={<a href="">...</a>}
                                   breakClassName={"break-me"}
                                   pageCount={this.state.totalPages}
                                   marginPagesDisplayed={1}
                                   pageRangeDisplayed={10}
                                   onPageChange={this.handlePageClick}
                                   containerClassName={"pagination"}
                                   subContainerClassName={"pages pagination"}
                                   activeClassName={"active"} />
                </div>

                {!this.state.artists
                    ? <p>LOADING!</p>
                    : <RepoGridForArtists artists={artists} />}

            </div>
        )
    }
}

export default PopularArtists;