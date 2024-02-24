import "dotenv/config"

export const getFromEnv = (value: string) => {
    const data = process.env[value];
    if (data) {
        return data
    } else {
        throw new Error(`${value} NOT FOUND IN .env!!`)
    }
}