import React from 'react';
import { fetchPopularTracksPerArtist } from '../utils/api';
import ReactPaginate from 'react-paginate';
import RepoGridForAlbums from './RepoGridForAlbums';

class Album extends React.Component {

    state = {
        artist: null,
        albums: null,
        totalPages: 0
    };


    componentDidMount(){
        const { params } = this.props.match;
        this.fetchTopAlbumsOfArtist(params.artist);
    }

    fetchTopAlbumsOfArtist = (artist, page = 1) => {
        this.setState(() => {
            return {
                artist: artist,
                albums: null,
                totalPages: 0
            }
        });

        fetchPopularTracksPerArtist(artist, page).then((result) => {
            this.setState(() => {
                return {
                    albums: result.data.topalbums.album,
                    totalPages: parseInt(result.data.topalbums['@attr'].totalPages)
                };
            })
        });
    };

    handlePageClick = (event) => {
        this.fetchTopAlbumsOfArtist(this.state.artist,(event.selected + 1));
    };

    render() {
        return(
            <div id='popular-albums'>
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

                {!this.state.albums
                    ? <p>LOADING!</p>
                    : <RepoGridForAlbums albums={this.state.albums} />}
            </div>
        )
    }
}

export default Album;