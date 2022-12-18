import React, { useEffect } from "react";
import cx from 'classnames'
// import style from './raining.module.css'
import './raining.css'
import $ from 'jquery'
type Props = {

}

// const $ = document.querySelector;

var makeItRain = function (position: string) {
    //clear out everything
    $('.rain').empty();
    // console.log(document.querySelector('.rain'), "raining");


    var increment = 0;
    var drops = "";
    var backDrops = "";

    while (increment < 100) {
        //couple random numbers to use for various randomizations
        //random number between 98 and 1
        var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
        //random number between 5 and 2
        var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
        //increment
        increment += 1;
        //add in a new raindrop with various randomizations to certain CSS properties
        drops += '<div className="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div className="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div className="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
        backDrops += '<div className="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div className="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div className="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    }

    $('.rain.front-row').append(drops);
    $('.rain.back-row').append(backDrops);
}

const Raining: React.FC<Props> = (props: Props) => {

    const makeRain = (increment: number, randoFiver: number, randoHundo: number, type: string) => {
        return <div className="drop"
            style={{
                left: type == 'front' ? `${increment}%` : 'unset',
                right: type == 'back' ? `${increment}%` : 'unset',
                bottom: `${randoFiver + randoFiver - 1 + 100}%`,
                animationDelay: `0.${randoHundo}s`,
                animationDuration: `0.5${randoHundo}s`
            }}>
            <div className="stem"
                style={{
                    // left: `${increment}%`,
                    bottom: `${randoFiver + randoFiver - 1 + 100}%`,
                    animationDelay: `0.${randoHundo}s`,
                    animationDuration: `0.5${randoHundo}s`
                }}>

            </div>
            <div className="splat"
                style={{
                    // left: `${increment}%`,
                    bottom: `${randoFiver + randoFiver - 1 + 100}%`,
                    animationDelay: `0.${randoHundo}s`,
                    animationDuration: `0.5${randoHundo}s`
                }}>
            </div>
        </div>
    }
    const duplicate = (num: number, type: string) => {
        var increment = 0;
        var drops = "";
        var backDrops = "";
        let content = [];

        while (increment < num) {
            //couple random numbers to use for various randomizations
            //random number between 98 and 1
            var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
            //random number between 5 and 2
            var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
            //increment

            increment += randoFiver;
            // console.log(increment, "increment");
            //add in a new raindrop with various randomizations to certain CSS properties
            content.push(makeRain(increment, randoHundo, randoFiver, type))
        }
        return content;
    }

    // const listRain = duplicate(100).map(() => {
    //     retturn 
    // })

    return <div className="wrapper back-row-toggle splat-toggle">
        <div className="rain front-row">
            {/* {duplicate(100)} */}
            {duplicate(500, "front")}
        </div>
        <div className="rain back-row">
            {duplicate(500, "back")}
        </div>
    </div>
}

export default Raining;