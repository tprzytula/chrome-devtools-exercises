export const getContent = (path) => {
    return new Promise((resolve, reject) => {
        fetch(path)
            .then(response => {
                return response.text()
            })
            .then(text => {
                resolve(text);
            })
            .catch(error => {
                reject(error);
            })
    });
};