import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IItem, IVacancies } from 'types';
import { IStore } from 'store';
import Logo from 'components/Logo';
import { vacanciesFetch } from 'store/Vacancies/actions';

interface IProps {
}

export default React.memo<IProps>(function Vacancies(){
  const vacancies: IVacancies = useSelector((store: IStore) => store.vacancies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(vacanciesFetch())
  }, [dispatch]);

  return <div>
    {vacancies.items.map((item: IItem) => (
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
})