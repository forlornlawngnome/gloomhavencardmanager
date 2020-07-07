export const DBConfig = {
  name: 'GloomDB',
  version: 1,
  objectStoresMeta: [
    {
      store: 'characters',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'characterData', keypath: 'characterData', options: { unique: false } }
      ]
    }
  ]
};
