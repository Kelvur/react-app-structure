// Service Middleware
import {get} from '03-service/00-middleware/fetch'
// Paths
import * as paths from '03-service/cat/paths'
// Utils
import noop from 'utils'


export function getRandomCatUrl(callback = noop){
	return get(paths.RANDOM_CAT).then(callback);
}
