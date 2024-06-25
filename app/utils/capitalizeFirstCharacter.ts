export default function capitalizeFirstCharacter(str: string) {
    if(str.includes("%20")) {
        const firstCharCapitalizedString = str[0].toUpperCase().concat(str.slice(1))
        return firstCharCapitalizedString.replaceAll('%20', ' ')
    } else {
        return str[0].toUpperCase().concat(str.slice(1))
    }
}