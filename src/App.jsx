import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout';
import HelloFresh from './pages/HelloFresh';
import Home from './pages/Home';
import Recipe from './pages/Recipe';

const App = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path='/hello-fresh' element={<HelloFresh />} />
                <Route path='/hello-fresh/:urlIdentifier' element={<Recipe />} />
            </Route>

        )
    );
    return <RouterProvider router={router} />
}

export default App
