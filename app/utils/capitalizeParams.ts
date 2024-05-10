export default function capitalizeParams(str:string) {
    if(str.includes("%20")) {
        const splitedString = str.split("%20")
        const capitailizedString = splitedString.map(str => str[0].toUpperCase().concat(str.slice(1)))
        return capitailizedString.join(' ')
    } else {
        return str[0].toUpperCase().concat(str.slice(1))
    }
}