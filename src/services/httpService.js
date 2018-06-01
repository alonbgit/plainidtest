import server from '../testServer/server';

const INTERVAL = 200;

const get = (url) => {

  return new Promise((resolve, reject) => {

    console.log('HTTP GET REQUEST', url);

    try {
      setTimeout(() => {
        const result = server[url]();
        const response = {
          data: result
        };

        console.log(`HTTP GET RESPONSE`, response);

        resolve(response);

      }, INTERVAL);
    }
    catch(ex) {
      reject(ex);
    }

  });

}

const post = (url, request) => {

  return new Promise((resolve, reject) => {

    console.log('HTTP POST REQUEST', url, request);

    try {
      setTimeout(() => {

        const result = server[url](request);
        const response = {
          data: result
        };

        console.log(`HTTP POST RESPONSE`, response);

        resolve(response);

      }, INTERVAL);
    }
    catch(ex) {
      reject(ex);
    }

  });

}

export default {
  get,
  post
}
