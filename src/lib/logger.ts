export const Console = {
    log: (message: string) => {
        if (import.meta.env.DEV) {
            // eslint-disable-next-line no-console
            console.log(message)
        }
    }
}
