import { authInstance } from "./instance"

const singup = async (user) => {
    try {
        const res = await authInstance.post('/singup', user)
        if (res.data) {
            return res.data
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
    }
    catch (error) {
        if (error.response && error.response.status === 400) {
            console.log('Invalid user');
        } else if (error.response && error.response.status === 403) {
            console.log('Invalid Password');
        } else {
            console.error('Signin error:', error);
        }
    }
};

export default {
    signin,
    singup
};
