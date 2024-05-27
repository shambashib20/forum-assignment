
import { Routes, Route} from "react-router-dom";
import { applicationRoutes } from './constants';

import './index.css'
import { uuid } from './utils';

function App() {

  return (
    <Routes>
      {applicationRoutes.map((routeProps) => (
        <Route key={uuid()} {...routeProps} />
      ))}
    </Routes>
  )
}

export default App
