/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid */
import LinkIcon from '@material-ui/icons/Link';
import React from 'react';
import clsx from 'clsx';
import Tooltip from '@material-ui/core/Tooltip';

import {translate} from '@docusaurus/Translate';
import {useThemeConfig} from '@docusaurus/theme-common';

import './styles.css';
import styles from './styles.module.css';

const Heading = (Tag) =>

  function TargetComponent({id, ...props}) {
    const {
      navbar: {hideOnScroll},
    } = useThemeConfig();

    if (!id) {
      return <Tag {...props} />;
    }

    return (
      <Tag {...props}>
        <a
          aria-hidden="true"
          tabIndex={-1}
          className={clsx('anchor', {
            [styles.enhancedAnchor]: !hideOnScroll,
          })}
          id={id}
        />
        <a href={`#${id}`} title="Go!">{props.children}</a>
        <a
          className="hash-link"
          href={`#${id}`}
          onClick={()=>{
            const newURL = new URL(window.location);
            newURL.hash = `#${id}`
            navigator.clipboard.writeText(newURL.href)}}
          title={translate({
            id: 'theme.common.headingLinkTitle',
            message: 'Go & Copy to clipboard',
            description: 'Go & Copy to clipboard',
        })}>
          <LinkIcon/>
        </a>
      </Tag>
    );
  };

export default Heading;