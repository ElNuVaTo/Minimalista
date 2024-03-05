import styled from "styled-components";

const Link = styled.a`
  background-color: #1e93f0;
  margin-top: 2px;
  text-decoration: none;
  color: white;
  border-radius: 5px;
  padding: 5px;
  text-align: center;

  @media (min-width: 500px) {
    display: none;
  }
`;

const DownloadCV = () => {
  return (
    <>
      <Link target="_blank" href="/Minimalista/pdf/Angelo.pdf">
        Descargar CV
      </Link>
    </>
  );
};
export default DownloadCV;
