
const get = (key) => {

  var existingDataJSON = localStorage.getItem(key);
  if (!existingDataJSON)
    return;

  var existingData = JSON.parse(existingDataJSON);
  if (existingData.expirationTime < new Date().getTime())
    return;

  return existingData.value;

}

const save = (key, data, expirationTime) => {

  const cacheData = {
    value: data,
    expirationTime: expirationTime.getTime()
  }

  localStorage.setItem(key, JSON.stringify(cacheData));

}

export default {
  get,
  save
}
