
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { lazy } from 'react';

import SharedLayout from './components/SharedLayout';
import Loader from './components/Loader';

const Home = lazy(() => import('./pages/home'));
const ErrorPage = lazy(() => import('./pages/error'));
const About = lazy(() => import('./pages/aboutUs'));
const Contact = lazy(() => import('./pages/contact'));
const Gallery = lazy(() => import('./pages/gallery'));
const NearestPlaces = lazy(() => import('./pages/nearestPlaces'));


function App() {
    const location = useLocation();
    return (
        <div className='flex flex-col min-h-screen overflow-x-hidden'>
            <AnimatePresence >
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={ <SharedLayout/> }>
                        <Route index element={ 
                            <Suspense fallback={<Loader/>}>
                                <Home /> 
                            </Suspense>
                        } />
                        <Route path='/aboutUs' element={ 
                            <Suspense fallback={<Loader/>}>
                                <About />
                            </Suspense>
                        } />

                        <Route path='/contact' element={ 
                            <Suspense fallback={<Loader/>}>
                                <Contact />
                            </Suspense>
                        } />
                        <Route path='/gallery' element={ 
                            <Suspense fallback={<Loader/>}>
                                <Gallery />
                            </Suspense>
                        } />
                        <Route path='/nearestPlaces' element={ 
                            <Suspense fallback={<Loader/>}>
                                <NearestPlaces />
                            </Suspense>
                        } />
                        <Route path="*" element={ 
                            <Suspense fallback={<Loader/>}>
                                <ErrorPage />
                            </Suspense>
                        } />
                    </Route>
                </Routes>
            </AnimatePresence>
        </div>
    );
}

export default App;
