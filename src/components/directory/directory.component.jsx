import React from "react";
import { connect } from "react-redux";
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";
import { selectorDirectorySections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";

const Directory = ({ directorySections }) => (
  <div className="directory-menu">
    {directorySections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  directorySections: selectorDirectorySections,
});
export default connect(mapStateToProps)(Directory);
