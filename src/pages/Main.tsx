import styled from "styled-components"; "styled-components";

export interface MainPageProps {

}

const MainPage: React.FunctionComponent<MainPageProps> = () => {
  return (
    <StyleWrapper 
      className="main-page" 
      id="main-page-content"
    >
        <section className="main-page-hero">
        
        </section>
        <section className="main-page-about">

        </section>
        <section className="main-page-work">

        </section>
    </StyleWrapper>
  );
}

const StyleWrapper = styled.main<{className: string; id: string;}>`
  &.main-page {

  }
`

export default MainPage;