import { Header } from "./components/app/Header"
import { MainPage } from "./components/pages/MainPage";
import { ThemeProvider } from "./hoc/ThemeProvider"
import { createGlobalStyle } from "styled-components"
import { Menu } from "./components/app/menu/Menu";
import { Container } from "./components/app/Container/Container";
import { TypeShowMenu } from "./types";
import { Route, Routes } from "react-router";
import { useTelegram } from "./hooks";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html {
    height: 100vh;
    width: 100vw;
  }

  // body {
  //   display: block;
  //   // flex-direction: column;
  //   // flex: 1
  // }

  :root {
    --color: green
  }

  #root {
    width: 100%;
    height: 100vh;
  }
`;

function App() {
  const [showMenu, setShowMenu] = useState<TypeShowMenu>({ show: false, renders: 0 });
  const toggleShowMenu = () => setShowMenu(prev => ({ show: !prev.show, renders: prev.renders + 1 }))
  const { tg } = useTelegram();
  if (!tg?.initDataUnsafe?.user) {
    console.log("нет телеграма")
  } else {
    console.log("есть телеграм")
    console.log("user ", tg?.initDataUnsafe?.user?.id)
  }
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <Container>
          <Header showMenu={toggleShowMenu} />
          <Container>
            <Menu $show={showMenu} />
            <Routes>
              <Route path="/" element={
                <MainPage />
              } />
            </Routes>
          </Container>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
