
const apiUrl = 'http://localhost:5000/';

export async function calculateSum(x: number, y: number) {
    try {
        const response = await fetch(`${apiUrl}sum`, {
            method: "POST",
            body: JSON.stringify({ a:x, b:y }),
            headers: {
                "content-type": "application/json"
            }
        })
        const result = response.json();
        return result;
    } catch (err) {
        console.log(err);
        return "An error occurred";
    }
}