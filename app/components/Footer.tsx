import React from "react";

const Footer = () => {
  return (
    <footer className="border-t mt-10 py-6 text-center text-sm bg-background text-foreground">
      <p>
        © {new Date().getFullYear()} <span className="font-semibold">Javaro</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
