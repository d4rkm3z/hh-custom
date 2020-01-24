import React, { useEffect, useState } from 'react';
import { vacancies } from 'api';
import { IItem } from 'types';
import Logo from 'components/Logo';

const IndexPage = () => {
  const [data, setData] = useState<IItem[]>([]);

  useEffect(() => {
    vacancies().then(data => {
      setData(data);
    });
  }, []);

  return <div>
    {data.map((item: IItem) => (
      <div key={item.id}>
        <Logo imgAlt={item.name} logoUrls={item.employer.logo_urls} />
        <div>
          <div>{item.name}</div>
          <div>{JSON.stringify(item.address)}</div>
          <div>{JSON.stringify(item.contacts)}</div>
        </div>
      </div>
    ))}
  </div>;
};

export default IndexPage;
