'use server'


async function HandleLogin(currstate: any,formdata: FormData) {
    
    // console.log(formdata);
    console.log(currstate);
    // currstate.errormessage = "error occured";
    return currstate;
};

export default HandleLogin;