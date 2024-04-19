const text = {
    "main": [
        `🍬*Tonsgift Bot*🍬

Tonsgift is a crypto gift bot base on [Tonspay](https://www.tonspay.top) .

You can generate a cash gift to your friends in crypto total decentralized .

Group gift and centralized invited gift 🚧 Coming soon 🚧

Support chains : \`TON\` | \`SOL\`.
`
    ],
}

const buttonText = {
    "main": [
        `Generate Gift !`,
        `Source Code`,
        `Share Tonsgift`
    ],
}

function close()
{
    return [
        {
            text:'❎Close',
            callback_data:"/close"
        },
        {
            text:'🏡Menu',
            callback_data:"/menu"
        }
    ]
}
module.exports = {
    text,
    buttonText,
    close
}