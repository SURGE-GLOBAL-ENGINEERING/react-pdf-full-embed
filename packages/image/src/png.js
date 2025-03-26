import PNG from '@surge-global-engineering/full-rpdf-png-js';

PNG.isValid = function(data) {
  try {
    return !!new PNG(data);
  } catch (e) {
    return false;
  }
};

export default PNG;
