import styled from "styled-components";

const Link = styled.a`
  background-color: #1e93f0;
  margin-top: 2px;
  text-decoration: none;
  color: white;
  border-radius: 5px;
  padding: 5px;
  text-align: center;
`;

const DownloadCV = () => {
  return (
    <>
      <Link target="_blank" href="../assets/pdf/Angelo_Alcaino_02_03_2024.pdf">
        Descargar CV
      </Link>
    </>
  );
};
export default DownloadCV;
