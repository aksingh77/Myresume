import React from 'react'

// import { makeStyles } from "@material-ui/core/styles"
import './NewYear.css'
import { Toolbar } from '@material-ui/core'
// const useStyle = makeStyles((theme) => (
//     {

//     }))
const NewYear = () => {
    // const classes = useStyle()
    return (
        <section>
            <Toolbar />
            <div className="box box1">
                <h2>
                    <span>Bye Bye</span>
                    <span>2020</span>
                </h2>
            </div>
            <div className="box box2">
                <h2>
                    <span>Happy New Year</span>
                    <span>2021</span>
                </h2>
            </div>
        </section>
    )
}

export default NewYear
