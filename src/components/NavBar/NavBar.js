import './NavBar.scss'

const NavBar = () => {
    return(
        <div className='navbar-primary'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv_v4AcvcsB4JZR5W6-vkAh4kYBfSQW_Fk7A&usqp=CAU" alt="imagen La Aldea" />
            <ul>
                <li><button>Inicio</button></li>
                <li><button>Productos</button></li>
                <li><button>Sobre Nosotros</button></li>
                <li><button>Contacto</button></li>
            </ul>
        </div>
    )
}

export default NavBar