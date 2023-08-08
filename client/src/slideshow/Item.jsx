import React from 'react';
import { Paper, Button } from '@mui/material'

const Item = (item) => {
    return (
        <Paper>
            console.log("object")
            <img src={item.img} alt="item.title" style={{width:"100%", height:"100%"}}/>
            <div className="discription" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                <h2>{item.title}</h2>
            </div>
            <Button variant='contained'>
                Check it out!
            </Button>
        </Paper>
    )
}

export default Item
