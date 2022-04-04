import React from 'react';

function Footer() {

  // Replace links with social media profiles
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com"
    },
    {
      name: "fab fa-instagram",
      link: "https://www.instagram.com/finewaters/"
    },
    {
      name: "fab fa-youtube",
      link: "https://www.youtube.com/user/finewaters"
    }
  ]

  return (
    <footer className="">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;