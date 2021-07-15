/* eslint-disable no-undef */
jest.setTimeout(120000);

beforeAll(async () => {
  await device.launchApp({permissions: {location: 'inuse', photos: 'YES'}});
  await device.reloadReactNative();
});
