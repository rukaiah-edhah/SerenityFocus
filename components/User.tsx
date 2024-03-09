import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export default async function User(){
    const {getUser} = getKindeServerSession();
    const user = await getUser();

    return(
        <>
            {user ?
            <div className='text-2xl'>Welcome, <span className='font-bold'>{user?.given_name}</span></div> : 
            <div></div>}
        </>
    )
}