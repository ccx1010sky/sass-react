import React from "react";

function Header() {
  return (
    // 
    <div className="Header">
      <div class="overlay"></div>
      <div class="menu-btn">
        {/* <!-- div里面无内容，相当于一个白色区块 --> */}

        <div class="btn-line"></div>
        <div class="btn-line"></div>
        <div class="btn-line"></div>
      </div>
      <div class="menu">
        <div class="menu-branding">
          <div class="img-portrait">
            <img src="" alt="" />
          </div>
        </div>
      </div>

      <ul>
        <li class="nav-item">
          <a href="/" class="nav-link">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a href="/about.html" class="nav-link">
            About Me
          </a>
        </li>
        <li class="nav-item">
          <a href="/work.html" class="nav-link">
            My Work
          </a>
        </li>
        <li class="nav-item">
          <a href="/contact.html" class="nav-link">
            How To Reach Me
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Header;
