import { isClassExpression } from '@babel/types'
import classes from './NavMenu.module.css'

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>  
                <a href="#">Profile</a>
            </div>
            <div className={classes.item}>
                <a href="#">Messages</a>
            </div>
            <div className={classes.item}>
                <a href="#">News</a>
            </div>
            <div className={classes.item}>
                <a href="#">Settings</a>
            </div>
        </nav>  
    )
}
export default Nav