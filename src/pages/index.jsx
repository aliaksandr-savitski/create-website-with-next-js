import PropTypes from 'prop-types';

import HomePageLayout from '@layouts/HomePageLayout';
import { fetchPageData } from '@clients/deliveryClient';
import { normalizeContentItem } from '@utils/normalizeContentItem';

const HomePage = ({ heroTitle }) => (
  <HomePageLayout title="Home">
    <h1>{heroTitle.value}</h1>
  </HomePageLayout>
);

export const getStaticProps = async () => {
  const { item } = await fetchPageData('home');
  const normalizedItem = normalizeContentItem(item);

  return {
    props: { ...normalizedItem },
  };
};

HomePage.propTypes = {
  heroTitle: PropTypes.shape({
    value: PropTypes.string.isRequired,
  }).isRequired,
};

export default HomePage;
