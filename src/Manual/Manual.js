import { useState } from 'react';
import Option from '../Option/Option';
import './Manual.css';
import Page1 from './Page1/Page1';
import Page2 from './Page2/Page2';

const Manual = ({ setIsHelpClick }) => {
    const [page, setPage] = useState(1);
    return <div className="manual">
        {
            page === 1
                ? <Page1 setIsHelpClick={setIsHelpClick} setPage={() => setPage(2)} />
                : page === 2
                    ? <Page2 setIsHelpClick={setIsHelpClick} setPage={() => setPage(1)} />
                    : null
        }
    </div>
}

export default Manual;