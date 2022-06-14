import { Header } from "./Header"
import { Container } from "../Container"
import { Footer } from "./Footer"

export const MainLayout = ({children}) => {
    return (
        <div>
            <Header/>
            <Container>{children}</Container>
            <Footer/>
        </div>
    )
}