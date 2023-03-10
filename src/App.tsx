import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {updateActual, updateLoading} from './slices/weatherSlice'
import {IActual} from './interfaces/weather'
import {fetchWeather} from './api/weather'
import reactLogo from './assets/react.svg'
import { RootState } from './app/store'
import Cloud from './components/clouds'
import Raining from './components/raining'

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
    <div className=" bg-[#c9dbe9]">
      <Cloud/>
      <Raining/>
      <div className='z-3 relative top-0'>
        {actual && JSON.stringify(actual.weather?.[0].main)}
      </div>
    </div>
  )
}

export default App
