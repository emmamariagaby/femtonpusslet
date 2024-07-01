import React from 'react';
import GlobalStyle from './styles/theme';
import Header, {headerText} from './components/Header/Header';
import Page from './components/Page/Page'
import Puzzle from "./components/Puzzle/Puzzle";

const App: React.FC = () => {
    return (
        <>
            <GlobalStyle/>
            <Header text={headerText}/>
        <Page>
             <Puzzle/>
        </Page>
            </>
    );
}

export default App;

