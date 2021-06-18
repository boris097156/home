import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <p>
          <small className="text-muted">
            Project code is open-sourced. Modified from {" "}
            <a
              className="badge badge-dark"
              rel="noopener"
              href="https://github.com/hashirshoaeb"
              aria-label="My GitHub"
            >
              Hashir Shoaib
            </a>
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
