import React from "react";
export default function Youtube() {
    return (
        <div style={{ "backgroundColor": "lightgrey" }}>
            <div className="text-center "> <br />
                <h3>Understanding Covid19</h3><br />
            </div>
            <div className="d-flex justify-content-center">
                <iframe src='https://www.youtube.com/embed/DCdxsnRF1Fk'
                    frameborder='0'
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='video'
                    width="600px"
                    height="320px" />
            </div>
            <br /><br />
        </div>
    )
}