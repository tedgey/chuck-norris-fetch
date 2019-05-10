function get(url) {
    return fetch(url)
        .then(resp => resp.json())
        .then(function(data) {
            return data.value;
        })
        .catch(function(error) {
            return error;
        });
}
