type LinkItemProps = { link: LinkItemType };

type LinkItemType = {
  href: string;
  label: string;
  iconUrl: string;
  alternativeText: string;
  isSponsored?: boolean;
};

export type { LinkItemProps, LinkItemType };
