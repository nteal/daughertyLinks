import React from 'react';
import EditLinksTable from './EditLinksTable';
import {withRouter} from 'react-router';

// TODO: fix from being modal to being page
const EditLinksModal = (props) => {
    return (
      <div className={'edit-links-modal'}>
        <i className={'fa-2x clickable fa fa-arrow-circle-o-left green'} onClick={() => this.props.history.goBack()} title="back"></i>
        <EditLinksTable {...props}/>
      </div>)
  }


export default withRouter(EditLinksModal);