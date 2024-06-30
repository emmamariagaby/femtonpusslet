import React from 'react';
import GlobalStyle from './styles/theme';
import Header, {headerText} from './components/Header/Header';
import Page from './components/Page/Page'
import Puzzle from "./components/Puzzle/Puzzle";

// huvudkomponenten app som renderar sidans byggstenar och passar vidare props
const App: React.FC = () => {
    return (
        <Page>
            <GlobalStyle/>
            <Header text={headerText}/>
             <Puzzle/>
        </Page>
    );
}

export default App;

