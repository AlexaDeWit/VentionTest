import * as React from 'react'
import styled from 'styled-components'
import isExternal from 'is-url-external';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom'



class LinkDuo extends React.Component {
  render() {
    return isExternal(this.props.to) ?
      // Linter disabled, relying on propTypes instead.
      <a
        href={this.props.to}
        {...this.props}
      >
        {this.props.children}
      </a>
      :
      <RouterLink {...this.props}>{this.props.children}</RouterLink>;
  }

  static propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    target: PropTypes.string,
    rel: PropTypes.string,
  }
}

export const Link = styled(LinkDuo)`
  color: #61dafb;
`;