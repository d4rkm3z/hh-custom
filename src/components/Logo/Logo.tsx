import React from 'react';
import { ILogoUrls } from 'types';

interface IProps {
  logoUrls: ILogoUrls,
  imgAlt: string
}

export default React.memo<IProps>(function Logo({ logoUrls, imgAlt }) {
  return (
    <img src={logoUrls?.['240']} alt={imgAlt} />
  );
});