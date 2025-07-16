import React, { isValidElement, ReactNode, ReactElement } from 'react';
import { ParseBionicText } from '../../utils/bionic.utils.js';
import { useBionic } from '../../store/useBionic.js';

import { IBionicBlockProps } from './bionic-block.interface';

export const BionicBlock = ({ children }: IBionicBlockProps) => {
  const { isBionic } = useBionic();

  // RECURSIVELY TRAVERSE CHILDREN NODES
  const transform = (node: ReactNode): ReactNode => {
    // IF THE NODE IS A STRING, APPLY BIONIC TEXT FORMATTING
    if (typeof node === 'string') {
      return ParseBionicText(node);
    }

    // IF THE NODE IS AN ARRAY OF NODES, RECURSIVELY TRANSFORM EACH NODE
    if (Array.isArray(node)) {
      return node.map((child, index) => <React.Fragment key={index}>{transform(child)}</React.Fragment>);
    }

    // IF THE NODE IS A VALID REACT ELEMENT, CLONE IT AND RECURSIVELY TRANSFORM ITS CHILDREN
    if (isValidElement(node)) {
      const { children: nodeChildren, ...restProps } = node.props as { children?: ReactNode };
      return React.cloneElement(node as ReactElement, restProps, transform(nodeChildren));
    }

    // RETURN THE NODE UNCHANGED IF IT'S NOT A STRING, ARRAY, OR VALID ELEMENT
    return node;
  };

  // APPLY THE TRANSFORMATION IF BIONIC READING IS ENABLED
  return <>{isBionic ? transform(children) : children}</>;
};
