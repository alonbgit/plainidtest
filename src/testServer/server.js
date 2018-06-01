import { actions, resources } from '../assets/data.json';

const getActionByIds = ({actionIds}) => {

  const actionsData = actions.filter((action) => actionIds.includes(action.id));
  return actionsData;

}

const getActionById = ({actionId}) => {

  const actionData = actions.find((action) => action.id === actionId);
  return actionData;

}

const getResources = () => {
  return resources;
}

const getResourcesByName = ({name}) => {
  const resourcesData = resources.filter((resource) => resource.name.toLowerCase().includes(name.toLowerCase()));
  return resourcesData;
}

const urls = {
  '/actions': getActionByIds,
  '/getActionById': getActionById,
  '/resources': getResources,
  '/getResourcesByName': getResourcesByName
}

export default urls;
