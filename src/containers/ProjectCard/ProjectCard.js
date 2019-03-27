import React, { Component } from 'react';
import { deleteProject } from '../../thunks/deleteProject';
import { connect } from 'react-redux';
import ProjectCardPalette from '../ProjectCardPalette/ProjectCardPalette';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    }
  }

  deleteCard = async (e) => {
    await this.props.deleteProject(parseInt(e.target.id));
  }

  copyShareLink = () => {
    this.setState({ copied: true })
  }
  
  render() {
    const { palettes, projectTitle, id } = this.props;
    return (
      <div className='project-card'>
        <h3 className='project-title'>{projectTitle}</h3>
        <CopyToClipboard text={window.location.href + `project/${id}`}
          onCopy={this.copyShareLink}>
          <button className='share-link'></button>
        </CopyToClipboard>
        <button onClick={this.deleteCard} id={id} className='delete-project'></button>
        {
          palettes.map(palette => {
            return <ProjectCardPalette {...palette} key={palette.id} />
          })
        }
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  deleteProject: (id) => dispatch(deleteProject(id)),
});

ProjectCard.propTypes = {
  deleteProject: PropTypes.func,
}

export default connect(null, mapDispatchToProps)(ProjectCard);