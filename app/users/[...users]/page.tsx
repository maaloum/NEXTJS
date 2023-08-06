import {FC} from 'react'

interface pageProps {
    params : {
        users?: string,
        searchParams: any;
    }
}

const page: FC<pageProps> = ({ params, searchParams }) =>{

    console.log(params.users)
    return <div>
       Other name : {params.users}
    </div>
}

export default page