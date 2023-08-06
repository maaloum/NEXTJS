import {FC, ReactNode} from 'react'

interface LayoutProps {
    children: ReactNode;
}

const layout: FC<LayoutProps> = ({ children} ) => {
    return <div className='text-slate-500'>{children}</div>
}

export default layout;