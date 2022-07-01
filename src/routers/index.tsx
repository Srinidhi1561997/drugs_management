import { useRoutes } from 'react-router-dom'
import DrugsDetails from '../containers/drugsDetails'
import CreateDrug from '../containers/createDrug'
import UpdateDrug from '../containers/updateDrug'

const AppRoutes = () => {
    const routes = useRoutes([
        { path: '/', element: <DrugsDetails /> },
        { path: '/create-drug', element: <CreateDrug /> },
        { path: '/update-drug', element: <UpdateDrug /> },
    ])
    return routes
}

export default AppRoutes