import Header from '../Header'
import Footer from '../Footer'
import BestGear from '../BestGear';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
                <BestGear />
            </main>
            <Footer />
        </>
    )
};

export default Layout;