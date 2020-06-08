

export const Data = () => (
    fetch('http://api.tvmaze.com/shows')
        .then(response => response.json())

)