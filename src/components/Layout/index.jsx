import Header from '../Header'
import Footer from '../Footer'
import BestGear from '../BestGear';
import { useRouter } from 'next/router'

const Layout = ({ children }) => {
    const { pathname } = useRouter();
    console.log(pathname)

    return (
        <>
            <Header />
            <main>
                {children}
                { pathname !== "/checkout" && <BestGear /> }
            </main>
            <Footer />
        </>
    )
};

export default Layout;