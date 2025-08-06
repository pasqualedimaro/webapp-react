import { Outlet } from "react-router-dom"
import Header from "../components/Header"



const DefaultLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <footer>2025 Cinevoto</footer>
        </>
    )
}

export default DefaultLayout