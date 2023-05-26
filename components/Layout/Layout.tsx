import { FC } from "react"
import Header from "@/components/Layout/Header/Header"
import Footer from "@/components/Layout/Footer/Footer"

type Props = {
    children: JSX.Element
}

const Layout: FC<Props> = ({ children}) => {
    return (
      <div className="main">
        <Header/>
            {children}
         <Footer/>
      </div>
    )
  }

  export default Layout
