

const getTemplate = async (url) => {
    const folder = url.substring(0, url.lastIndexOf("/"));

    const res = await fetch(folder + "/index.html");
    const text = await res.text();

    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(text, "text/html");

    return htmlDoc.querySelector("template");
};

export default getTemplate;