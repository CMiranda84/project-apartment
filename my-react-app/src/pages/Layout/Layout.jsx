import React from "react";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {/* Aqui você aplica sua imagem de fundo */}
      <div className="backgroundImage"></div>
      {/* Conteúdo das páginas */}
      {children}
    </div>
  );
};

export default Layout;