import React, { Component } from 'react';
import { deletePalette } from '../../thunks/deletePalette';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export class ProjectCardPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    }
  }

  deleteCardPalette = async (e) => {
    await this.props.deletePalette(parseInt(e.target.id));
  }

  shareCardPalette = () => {
    this.setState({ copied: true })
    setTimeout(() => {
      this.setState({ copied: false })
    }, 2000);
  }

  render() {
    const { name, color1, color2, color3, color4, color5, id } = this.props;
    return (
      <div className='card-palette'>
        <h4 className='name-text'>{name}</h4>
        <div style={{ backgroundColor: color1 }} className='palette-color-div'></div>
        <div style={{ backgroundColor: color2 }} className='palette-color-div'></div>
        <div style={{ backgroundColor: color3 }} className='palette-color-div'></div>
        <div style={{ backgroundColor: color4 }} className='palette-color-div'></div>
        <div style={{ backgroundColor: color5 }} className='palette-color-div'></div>
        <CopyToClipboard text={window.location.href + `palette/${id}`}
          onCopy={this.shareCardPalette}>
          <button className='share-palette'></button>
        </CopyToClipboard>
        <button onClick={this.deleteCardPalette} id={id} className='delete-palette'></button>
        {this.state.copied && <p className='copied-text'>Copied</p>}
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  deletePalette: (id) => dispatch(deletePalette(id)),
});

ProjectCardPalette.propTypes = {
  deletePalette: PropTypes.func,
}

export default connect(null, mapDispatchToProps)(ProjectCardPalette);