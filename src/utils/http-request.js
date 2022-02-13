const urlGetData = "https://www.reddit.com/r/";


export async function getData(hobby, url = urlGetData) {
    try {
        const response = await fetch(`${url}${hobby}/new.json?limit=15`);

        if (response.ok) {
            const data = await response.json(); // parses JSON response into native JavaScript objects
            return data;
        }

        throw new Error("getData failed");
    } catch (error) {
        console.log(error.name + ': ' + error.message)
    }
}