import { LoginLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

export default async function UserAuth(){
    const {getUser} = getKindeServerSession();
    const user = await getUser();

    return(
        <>
            {user ?
            <>
                <LogoutLink className='flex items-center text-base font-medium transition-all hover:opacity-60 uppercase'>Log out</LogoutLink>
            </> :
            <>
                <LoginLink className='flex items-center text-base font-medium transition-all hover:opacity-60 uppercase'>Sign in</LoginLink>
            </>
            }
        </>
    )
}