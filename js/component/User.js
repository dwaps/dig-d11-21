class User
{

    static newEntry = (firstname, lastname, email, password, tel) =>
    {
        const userInfo = {
            firstname,
            lastname,
            email,
            password: window.btoa(password),
            tel
        }
        localStorage.setItem('userInfo', JSON.stringify(userInfo))

    }

    static setPreference = (preference) =>
    {
        const userInfo = User.getInfos()
        userInfo.preference = preference
        localStorage.setItem('userInfo', JSON.stringify(userInfo))
    }

    static setAddress = (address) =>
    {
        const userInfo = User.getInfos()
        userInfo.address = address
        localStorage.setItem('userInfo', JSON.stringify(userInfo))
    }

    static getInfos = () =>
    {
        const userinfo = JSON.parse(localStorage.getItem('userInfo'))
        return userinfo
    }
}
export default User