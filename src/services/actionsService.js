import httpService from './httpService';
import cacheService from './cacheService';

const getActionById = (actionId) => {

  return httpService.post('/getActionById', {
    actionId
  });

}

const getActionByIds = (actionIds) => {

  return new Promise((resolve, reject) => {

    const actions = [];
    const noneCacheActionIds = [];

    actionIds.forEach((actionId) => {

      const cacheAction = cacheService.get(`action_${actionId}`);
      if (cacheAction)
        actions.push(cacheAction);
      else
        noneCacheActionIds.push(actionId);

    });

    if (noneCacheActionIds.length === 0)
      return resolve(actions);

    const promises = [];
    noneCacheActionIds.forEach((actionId) => {
      const promise = getActionById(actionId);
      promises.push(promise);
    });

    Promise.all(promises).then((responses) => {

      responses.forEach((response) => {
        const action = response.data;

        // expiration time is 4 hours head
        const expirationTime = new Date(new Date().setHours(new Date().getHours() + 4));
        cacheService.save(`action_${action.id}`, action, expirationTime);

        actions.push(action);
      });

      resolve(actions);

    });

  });

}

export default {
  getActionByIds
}
