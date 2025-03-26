import * as R from 'ramda';
import * as P from '@surge-global-engineering/full-rpdf-primitives';

const isLink = R.propEq('type', P.Link);

export default isLink;
