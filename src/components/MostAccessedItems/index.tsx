import React, { useState } from 'react';

import { LinkItem } from 'components/LinkItem';

import * as SC from './styles';

type LinkItemType = {
  href: string;
  label: string;
  iconUrl: string;
  alternativeText: string;
  isSponsored?: boolean;
};

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
export type { LinkItemType };
