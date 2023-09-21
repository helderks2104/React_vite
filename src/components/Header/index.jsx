import React from 'react';
import './index.css';
import { FaHome, FaInfo, FaAndroid, FaAngellist } from 'react-icons/fa';
import { HiQrcode } from 'react-icons/hi';

export default function Header() {
  return (
    <>
      <div className="header-container">
        <div className="logo">
          <HiQrcode size={80} />
        </div>
        <ul className="ul">
          <li className="li">
            <a href="" className="a">
              <i className="i">
                <FaHome />
              </i>
            </a>
          </li>
          <li className="li">
            <a href="" className="a">
              <i className="i">
                <FaInfo />
              </i>
            </a>
          </li>
          <li className="li">
            <a href="#" className="a">
              <i className="i">
                <FaAndroid />
              </i>
            </a>
          </li>
          <li className="li">
            <a href="" className="a">
              <i className="i">
                <FaAngellist />
              </i>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h1>
          Example heading
          <Badge bg="secondary" as={Button}>
            New
          </Badge>
        </h1>
      </div>
    </>
  );
}
