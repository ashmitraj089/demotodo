import Timer from './Timer'
function Navbar(){
    return(
        <nav  className="navbar navbar-dark bg-dark fixed-top" style={{fontFamily: "'Anton', sans-serif",letterSpacing:'4px'}}>
                <h1 style={{margin:'0%',color:'white',marginLeft:'5%'}}>ToDo List</h1>
                <span style={{float:'right',color:'white',marginRight:'5%'}}><Timer/></span>
        </nav>
    )
}
export default Navbar;