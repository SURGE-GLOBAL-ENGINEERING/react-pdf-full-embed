import * as R from 'ramda';
import * as P from '@surge-global-engineering/full-rpdf-primitives';

const isImage = R.propEq('type', P.Image);

export default isImage;
