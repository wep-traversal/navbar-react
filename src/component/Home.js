import React from 'react'
import image_3 from "./image/image_3.jpg";
import image_4 from "./image/image_4.jpg";
import image_5 from "./image/image_5.jpg";
import image_6 from "./image/image_6.jpg";
import image_9 from "./image/image_9.jpg";
import image_12 from "./image/image_12.jpg";

import Cart from "./Cart";
import "./style.css"

export default function Home() {
    return (
        <div className="content">
            <div className="card-container">
                <div className="items">
                    <Cart src={ image_3 }
                        text="my style is very good" />
                </div>
                <div className="items">
                    <Cart src={ image_4 }
                        text="my style is very good" />
                </div>
                <div className="items">
                    <Cart src={ image_5 }
                        text="my style is very good" />
                </div>
                <div className="items">
                    <Cart src={ image_6 }
                        text="my style is very good" />
                </div>
                <div className="items">
                    <Cart src={ image_9 }
                        text="my style is very good" />
                </div>
                <div className="items">
                    <Cart src={ image_12 }
                        text="my style is very good" />
                </div>
            </div>
        </div>
    )
}
