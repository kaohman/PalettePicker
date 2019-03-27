import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProject } from '../../thunks/fetchProject';
import { fetchPalette } from '../../thunks/fetchPalette';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import Palette from '../Palette/Palette';
import NotFound from '../../components/NotFound/NotFound';
import PropTypes from 'prop-types';

export class Share extends Component {

  componentDidMount = () => {
    const { id, isProject, fetchProject, fetchPalette } = this.props;
    isProject ? fetchProject(id) : fetchPalette(id);
  };

  render() {
    const { projects, palettes, isProject, loading } = this.props;
    const palette = palettes[0];
    if(loading) {
      return <div>loading</div>
    } else if (isProject && projects.length) {
      return (
        <div>
          <ProjectContainer />
        </div>
      );
    } else if (!isProject && palettes.length) {
      return <Palette palette={palette} />
    } else {
      return <NotFound />
    }
  };
};

export const mapStateToProps = (state) => ({
  projects: state.projects,
  palettes: state.palettes,
  loading: state.loading,
});

export const mapDispatchToProps = (dispatch) => ({
  fetchProject: (id) => dispatch(fetchProject(id)),
  fetchPalette: (id) => dispatch(fetchPalette(id)),
});

Share.propTypes = {
  projects: PropTypes.array,
  palettes: PropTypes.array,
  fetchProject: PropTypes.func,
  fetchPalette: PropTypes.func,
}

Share.defaultProps = {
  palettes: [],
  projects: [],
}

export default connect(mapStateToProps, mapDispatchToProps)(Share);

