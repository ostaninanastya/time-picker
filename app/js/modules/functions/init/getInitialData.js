export default function getInitialData() {
    return new Promise((resolve) => {
        /*
        * received initial data format : '[ { "id" : 4}, {"id" : 77}, {"id": 82} ]';
        */
        let jsonString = '\[\]';
        let initialData = JSON.parse(jsonString);
        resolve(initialData);
    });
}

