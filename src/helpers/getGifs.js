export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=l71lGz2yNHQxgj6Mkbg8VAyxGHYSjw5M`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    return data.map(element => {
        return {
            id: element.id,
            title: element.title,
            url: element.images?.downsized_medium.url
        };
    });
};