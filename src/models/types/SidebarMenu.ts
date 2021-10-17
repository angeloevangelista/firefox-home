import { InputHTMLAttributes } from 'react';

import { SidebarMenuSectionCodes } from 'models/enumerators/SidebarMenuSectionCodes';

type SidebarMenuProps = {
  visible: boolean;
  handleCloseButtonClick?: () => void;
} & InputHTMLAttributes<HTMLDivElement>;

type SidebarMenuSectionProps = {
  sidebarMenuSectionCode: SidebarMenuSectionCodes;
  title: string;
  description?: string;
};

export type { SidebarMenuProps, SidebarMenuSectionProps };
