// ActionCreators
import { setDogUrl } from '02-actions/dog/ActionCreators'
// Service
import * as service from '03-service/dog';


export const getRandomDogUrl = () => dispatch => {
	service.getRandomDogUrl(response => dispatch(setDogUrl(response.url)));
}
