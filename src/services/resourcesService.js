import httpService from './httpService';

const getResources = () => {

  return httpService.get('/resources');

}

const getResourcesByName = (name) => {

  return httpService.post('/getResourcesByName', {
    name
  });

}

export default {
  getResources,
  getResourcesByName
}
