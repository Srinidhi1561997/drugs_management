import { useEffect } from "react";
import { useAppDispatch } from "./hooks"
import {HashRouter as Router} from 'react-router-dom'
import AppRoutes from "./routers";
import { fetchDrugList } from "./reducers/actions";
function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    // dispatch({ type: 'GET_DRUGS' })
    dispatch(fetchDrugList())
  })
  return (
    <Router>
      <AppRoutes/>
    </Router>
  );
}

export default App;
