import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchProjects } from '../../thunks/searchProjects';
import { setSearching } from '../../actions';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  };

  handleChange = (e) => {
    const { value } = e.target;
    const { setSearching, searchProjects } = this.props;
    const { search } = this.state;

    this.setState({ search: value },
      () => {
        if (value.length) {
          setSearching(true)
          searchProjects(search)
        } else {
          setSearching(false)
        }
      });
  };

  render() {
    const { search } = this.state;
    return (
      <div className='header-div'>
        <h1>Palette Picker</h1>
        <label className='search-bar'>Search Projects:
        <input onChange={this.handleChange} value={search} placeholder='Type project/palette name'></input>
        </label>
      </div>
    );
  };
};

export const mapStateToProps = (state) => ({
  searching: state.searching,
});

export const mapDispatchToProps = (dispatch) => ({
  searchProjects: (search) => dispatch(searchProjects(search)),
  setSearching: (bool) => dispatch(setSearching(bool)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);