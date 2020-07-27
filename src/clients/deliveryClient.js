import { DeliveryClient } from '@kentico/kontent-delivery';

import CONFIG from '@config';

const { projectId } = CONFIG.content.kentico.deliveryAPI;

const deliveryClient = new DeliveryClient({
  projectId,
  isDeveloperMode: process.env.NODE_ENV === 'development',
});

export const fetchPageData = codename => deliveryClient
  .item(codename)
  .toPromise();

export default deliveryClient;
