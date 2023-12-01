import { authInstance } from "./instance"

const singup = async (user) => {
    try {
        const res = await authInstance.post('/singup', user)
        if (res.data) {
            console.log(res.data)
        }
    }
    catch (e) {
        console.log('singup error',e)
    }
}

const signin = async (user) => {
    try {
        const res = await authInstance.post('/singin', user);
        if (res.data) {
            sessionStorage.setItem('User', JSON.stringify(res.data));
            // console.log(res.data)
            return res.data;
        }
    } catch (e) {
        console.log('singin error',e);
    }
};

export default {
    signin,
    singup
};
