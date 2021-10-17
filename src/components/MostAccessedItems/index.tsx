import React, { useState } from 'react';

import { LinkItem } from 'components/LinkItem';
import { LinkItemType } from 'models/types/LinkItem';

import * as SC from './styles';

const MostAccessedItems: React.FC = () => {
  const [links] = useState<LinkItemType[]>([
    {
      alternativeText: 'Github',
      label: 'github',
      href: 'https://github.com',
      iconUrl: 'https://github.githubassets.com/images/mona-loading-dark.gif',
    },
  ]);

  return (
    <SC.Container>
      <ul className="item-list">
        {links.map((link) => (
          <LinkItem key={link.href} link={link} />
        ))}
      </ul>
    </SC.Container>
  );
};

export { MostAccessedItems };
