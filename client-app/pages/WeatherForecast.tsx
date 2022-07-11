import axios from "axios";
import { useEffect, useState } from "react";

export default function WeatherForest() {

    const [weatherForestList, setWeatherForest] = useState<any[]>([])

    async function fetchWeatherList() {
        const response = await axios.get("/api/weatherforecast")
        const { data } = response
        setWeatherForest(data)
    }

    useEffect(() => {
        fetchWeatherList();
    }, [])

    return (
        !!weatherForestList.length &&
        <>
            <table>
                <thead>
                    <tr>
                        <th>date</th>
                        <th>temperatureC</th>
                        <th>temperatureF</th>
                        <th>summary</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        weatherForestList.map((val) => {
                            return (
                                <tr>
                                    <td>{val.date}</td>
                                    <td>{val.temperatureC}</td>
                                    <td>{val.temperatureF}</td>
                                    <td>{val.summary}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}