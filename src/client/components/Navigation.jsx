import React, { useEffect } from 'react';
import { TopBar, Badge, Button, Menu } from '~gui-library';
import { IoIosArrowBack } from 'react-icons/io';
import logo from '../assets/oliasoft_logo.svg';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sitesRequested } from "../../client/store/entities/sites/sites";
import { useLocation } from 'react-router-dom';

export const Navigation = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  let isLoggedIn = true

  let checkLocation = useLocation().pathname;
  if (checkLocation == "/") {
    var backButton =
      [
        {
          label: '',
          onClick: function noRefCheck() { },
          type: ''
        }]
  } else {
    var backButton = [
      {
        icon: <IoIosArrowBack color='rgb(235, 103, 52)' size={30} />,
        label: 'Back',
        onClick: function noRefCheck() {
          history.push("/")
        },
        type: 'Link'
      }]
  }
  useEffect(() => {
    setTimeout(() => { dispatch(sitesRequested(false)) }, 250)
  }
  ); return (
    <TopBar
      content={[
        {
          label: 'Site View',
          onClick: function noRefCheck() { history.push("/") },
          type: 'Link'
        },
        {
          label: 'Chart View',
          onClick: function noRefCheck() {
            history.push("/chart")
          },
          type: 'Link'
        },
      ]}
      contentRight={backButton}
      title={{
        logo: <img alt="logo" src={logo} />,
        onClick: function noRefCheck() { },
        version: 'V1.2.3'
      }}
      fixedPosition={false}
    />
  );
}
