import React, {Component} from 'react';
import { objects } from "./Objects";
import './favorite.css';


class Card extends Component{
    render(){
        return (
            <div>
                <div class="tc ma2 pa3">
                    <hr color='#a3e8d6' />
                    <h1 className="light-green pa3">Unsere Empfehlungen für Dich!</h1>

                    {objects.map((item) => {
                        return (
                            <div className="gallery tc bg-moon-gray dib br3 pa3 ma2 grow bw2 shadow-5">
                                <a href=''><img src={item.picture} alt={item.alt} height="180px" witdh="180px"/></a>
                                <div className="ma1 pa2">
                                    <h2>{item.name}</h2>
                                    <h4>{item.location}</h4>
                                </div>
                            </div>   
                            )
                    })}
                    <div> 
                        <form action="www.google.de">
                        <button class="insp grow tc hover-white" type='submit'>Gib mir mehr Inspiration!</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
        

export default Card