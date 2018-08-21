// @flow
import React from 'react';
import type { Node } from 'react';
import 'styles/index.css';

type Props = {
  header: Node,
  children: Node,
}

const PageTemplate = ({ header, children }: Props) => (
  <div className="PageTemplate">
    <div className="header-area">
      { header }
    </div>
    <div className="post-area">
      { children }
    </div>
  </div>
);

export default PageTemplate;