import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './main.routes';

export default function ThemeRoutes() {
    return useRoutes([MainRoutes], '');
}