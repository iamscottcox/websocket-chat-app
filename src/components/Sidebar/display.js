import React from 'react';
import propTypes from 'prop-types';

export const Sidebar = ({ users }) => (
  <aside id="sidebar" className="sidebar">
    <ul>
      {users.map(({id, name}) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  </aside>
);

Sidebar.propTypes = {
  users: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
    }).isRequired
  ).isRequired
};

export default Sidebar;
