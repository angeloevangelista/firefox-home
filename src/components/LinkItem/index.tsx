import React, { useCallback, useState } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';

import { ContextMenu } from 'components/ContextMenu';
import { LinkItemProps } from 'models/types/LinkItem';
import { ContextMenuGroup } from 'models/types/ContextMenu';

import * as SC from './styles';

const LinkItem: React.FC<LinkItemProps> = ({ link }) => {
  const [contextMenuGroups] = useState<ContextMenuGroup[]>([
    {
      itens: [
        {
          label: 'Pin',
          disabled: true,
          onClick: () => {},
        },
        {
          label: 'Edit',
          disabled: true,
          onClick: () => {},
        },
      ],
    },
    {
      itens: [
        {
          label: 'Open in a new Window',
          disabled: false,
          onClick: () => {
            window.open(link.href, '_blank');
          },
        },
        {
          label: 'Open in a new Private Window',
          disabled: true,
          onClick: () => {},
        },
      ],
    },
    {
      itens: [
        {
          label: 'Dismiss',
          disabled: true,
          onClick: () => {},
        },
        {
          label: 'Delete from History',
          disabled: true,
          onClick: () => {},
        },
      ],
    },
  ]);

  const [showContextMenu, setShowContextMenu] = useState(false);

  const [hideOptionsContainerTimeout, setHideOptionsContainerTimeout] =
    useState<NodeJS.Timeout | null>(null);

  const handleContextMenuMouseLeave = useCallback(() => {
    const timeout = setTimeout(() => {
      setShowContextMenu(false);
    }, 500);

    setHideOptionsContainerTimeout(timeout);
  }, []);

  const handleContextMenuMouseEnter = useCallback(() => {
    hideOptionsContainerTimeout && clearTimeout(hideOptionsContainerTimeout);
  }, [hideOptionsContainerTimeout]);

  const handleContextMenuTogglerClick = useCallback(() => {
    setShowContextMenu(true);
  }, []);

  return (
    <SC.Container>
      <SC.ContextMenuToggler onClick={handleContextMenuTogglerClick}>
        <FiMoreHorizontal />
      </SC.ContextMenuToggler>

      <SC.IconContainer href={link.href} className="icon-container">
        <img src={link.iconUrl} alt={link.alternativeText} />
      </SC.IconContainer>

      <SC.SiteInfoContainer>
        <span>{link.label}</span>
        <span
          className={link.isSponsored ? 'sponsored' : ''}
          dangerouslySetInnerHTML={{
            __html: link.isSponsored ? 'Sponsored' : '&nbsp;',
          }}
        />
      </SC.SiteInfoContainer>

      <ContextMenu
        visible={showContextMenu}
        contextMenuGroups={contextMenuGroups}
        handleContextMenuMouseEnter={handleContextMenuMouseEnter}
        handleContextMenuMouseLeave={handleContextMenuMouseLeave}
      />
    </SC.Container>
  );
};

export { LinkItem };
