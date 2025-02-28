import Router from './router/router'
import './App.css'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from './store/feature/postSlice';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      <Router />
    </>
  )
}

export default App
