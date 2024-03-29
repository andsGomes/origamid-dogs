import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';

import { ReactComponent as MinhasFotos} from '../../Assets/feed.svg';
import { ReactComponent as Estatisticas} from '../../Assets/estatisticas.svg';
import { ReactComponent as AdicionarFotos} from '../../Assets/adicionar.svg';
import { ReactComponent as Sair} from '../../Assets/sair.svg';

import styles from './UserHeaderNav.module.css';
import { useMedia } from '../../Hooks/useMedia';

export const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia("(max-width: 45rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);
  
  return (
    <>
      {mobile && (
        <button
        className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Menu"
        ></button>
      )}
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to="/conta" end>
          <MinhasFotos /> {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Estatisticas /> {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          <AdicionarFotos /> {mobile && "Adicionar Fotos"}
        </NavLink>
        <button onClick={userLogout}>
          <Sair /> {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
}
