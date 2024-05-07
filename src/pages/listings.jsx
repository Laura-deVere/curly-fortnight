import { ListingsProvider } from 'shared/providers/listings-provider';
import PropertiesList from '../components/properties-list/properties-list';

const PageListings = () => {
  return (
    <section>
      <ListingsProvider>
        <PropertiesList />
      </ListingsProvider>
    </section>
  );
};

export default PageListings;
