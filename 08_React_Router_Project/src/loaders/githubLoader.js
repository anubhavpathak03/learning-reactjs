export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/anubhavpathak03')
    // console.Table(response.json());
    return response.json()
}