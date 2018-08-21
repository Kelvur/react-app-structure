// Service Middleware
import {get} from '03-service/00-middleware/fetch'
// Paths
import * as paths from '03-service/dog/paths'
// Utils
import noop from 'utils'


export function getRandomDogUrl(callback = noop){
	return get(paths.RANDOM_DOG).then(callback);
}
