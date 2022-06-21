export const resolve: PropertyDecorator = (target, propertyKey) => {
  const type = Reflect.getMetadata('design:type', target, propertyKey);
  console.log('=== resolve decorate arguments: ', target, propertyKey, type);
};
