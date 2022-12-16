import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {updateActual, updateLoading} from './slices/weatherSlice'
import {IActual} from './interfaces/weather'
import {fetchWeather} from './api/weather'
import reactLogo from './assets/react.svg'
import './App.css'
import { RootState } from './app/store'
import Cloud from './components/background.ts'

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch();
  const {actual} = useSelector((state: RootState) => state.weatherWatch)

  function getWeather(content: string) {
    dispatch(updateLoading(true));
    fetchWeather(content).then(res => {
      dispatch(updateActual(res.data as IActual));
    }).catch(error => {
      var msg = 'Cidade não encontrada!';

      if (error.response.data.cod != 404) {
        msg = error.response.data.message;
      }
      dispatch(updateActual({}));
    }).finally(() => {
      dispatch(updateLoading(false));
    });
  }

  useEffect(function () {
    getWeather("Ha noi")
  }, [])

  return (
    <div className="App bg-red-400">
      <Cloud/>
      {actual && JSON.stringify(actual.weather?.[0].main)}
    </div>
  )
}

export default App
