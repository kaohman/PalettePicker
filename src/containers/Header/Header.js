import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../../thunks/fetchProjects';
import { setError, setSearching } from '../../actions';
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  };

  handleChange = (e) => {
    this.props.setError('');
    const { value } = e.target;
    this.setState({ search: value }, this.handleSearch);
  };

  handleSearch = () => {
    const { search } = this.state;
    const { setSearching, fetchProjects } = this.props;
    if (search.length) {
      setSearching(true);
      fetchProjects(search);
    } else {
      setSearching(false);
      fetchProjects();
    }
  };

  render() {
    const { search } = this.state;
    return (
      <div className='header-div'>
        <NavLink id='title' to='/'>Palette Picker</NavLink>
        {
          this.props.location.pathname === '/' &&
          <label className='search-bar'>Search Projects:
          <input onChange={this.handleChange} value={search} placeholder='Type project/palette name'></input>
          </label>
        }
      </div>
    );
  };
};

export const mapDispatchToProps = (dispatch) => ({
  setError: (error) => dispatch(setError(error)),
  fetchProjects: (name) => dispatch(fetchProjects(name)),
  setSearching: (bool) => dispatch(setSearching(bool))
});

Header.propTypes = {
  setSearching: PropTypes.func,
  setError: PropTypes.func,
  fetchProjects: PropTypes.func,
}

export default withRouter(connect(null, mapDispatchToProps)(Header));