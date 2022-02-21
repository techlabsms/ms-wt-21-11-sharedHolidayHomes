import React, {Component} from 'react';
import { objects } from "./Objects";


class Card extends Component{
    render(){
        return (
            <div class="bottom">
                <div class="tc ma4 pa3">
                    <hr color='#a3e8d6' />
                    <h1 className="light-green pa3">Unsere Empfehlungen für Dich!</h1>

                    {objects.map((item) => {
                        return (
                            <div className="tc bg-moon-gray dib br3 pa3 ma2 grow bw2 shadow-5">
                                <a href=''><img src={item.picture} alt={item.alt} height="197px" witdh="197px"/></a>
                                <div className="ma1 pa2">
                                    <h2>{item.name}</h2>
                                    <h4>{item.location}</h4>
                                </div>
                            </div>  
                        )
                    })}
                </div>
            </div>
        )
    }
}
        

export default Card