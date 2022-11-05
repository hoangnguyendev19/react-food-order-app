import React, { useRef, useState } from 'react';

import { Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import logo from '../../assets/images/res-logo.png';
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { toggle } from '../../store/shopping-cart/cartUiSlice';

import '../../styles/header.css';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase-config';
import { updateSignInStatus } from '../../store/auth/authSlice';

const nav__links = [
  {
    display: 'Home',
    path: '/home',
  },
  {
    display: 'Foods',
    path: '/foods',
  },
  {
    display: 'Cart',
    path: '/cart',
  },
  {
    display: 'Contact',
    path: '/contact',
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const signInStatus = useSelector((state) => state.auth.signInStatus);

  const dispatch = useDispatch();

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

  const toggleCart = () => {
    dispatch(toggle());
  };

  const logout = async () => {
    await signOut(auth);
    dispatch(updateSignInStatus(false));
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <Link to="/home">
              <img src={logo} alt="logo" />
              <h5>Hoang's Food</h5>
            </Link>
          </div>

          <div className="navigation" ref={menuRef}>
            <ul className="menu">
              <li>
                <span className="show__close" onClick={toggleMenu}>
                  <i class="ri-close-line"></i>
                </span>
              </li>
              {nav__links.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={(navClass) => (navClass.isActive ? 'active__menu' : '')}
                    onClick={toggleMenu}
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={toggleCart}>
              <i class="ri-shopping-basket-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>

            <div className="user">
              {signInStatus ? (
                <Dropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)}>
                  <DropdownToggle caret tag="span">
                    <i class="ri-user-line"></i>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <Link to="/home">Your profile</Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/cart">Your cart</Link>
                    </DropdownItem>
                    <DropdownItem onClick={logout}>Sign out</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              ) : (
                <>
                  <div className="user__sign-in">
                    <Link to="/login">Sign In</Link>
                  </div>
                  <div className="user__sign-up">
                    <Link to="/register">Sign Out</Link>
                  </div>
                </>
              )}
            </div>

            <span className="mobile__menu" onClick={toggleMenu}>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
