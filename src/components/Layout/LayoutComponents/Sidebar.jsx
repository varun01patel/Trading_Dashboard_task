import styles from "../Layout.module.css"
import { NavLink } from "react-router-dom"
import {
    FcAreaChart,
    MdOutlineDashboard,
    BsBarChartLine,
    TbZoomMoney,
    BiWallet,
    HiOutlineNewspaper,
    BsFillPersonFill,
    SiBuymeacoffee,
    BsGithub
} from 'react-icons/all'
import Logo from "../../Logo/Logo"
import { Box, Link as Anchor, Divider } from "@chakra-ui/react"

function Sidebar() {

    return (
        <aside className={styles.sidebar}>
            <Box className={styles.logoResponsive}><FcAreaChart /></Box>
            <Box className={styles.logo} ><Logo size='1.5rem' /></Box>
            <nav className={styles.navbar}>
                <ul>
                    <NavLink to={"/overview"} ><li><MdOutlineDashboard /><span>Overview</span></li></NavLink>
                    <NavLink to={"/stocks"}><li><TbZoomMoney /><span>Stocks</span></li></NavLink>
                   
                </ul>
                <ul>
                    <Divider />
                    <Box className={styles.socialLinks}>
                        <Anchor href='https://github.com/varun01patel' isExternal><BsGithub /></Anchor>
                        <Anchor href='https://varun-workfolio.netlify.app/' isExternal><BsFillPersonFill /></Anchor>
                        <Anchor href='https://www.linkedin.com/in/varun01patel/' isExternal><SiBuymeacoffee /></Anchor>
                    </Box>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar