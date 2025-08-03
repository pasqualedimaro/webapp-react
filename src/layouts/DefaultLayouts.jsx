import { Outlet } from "react-router-dom"
import Header from "../components/Header"



const DefaultLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <footer>sono il footer</footer>
        </>
    )
}

export default DefaultLayout