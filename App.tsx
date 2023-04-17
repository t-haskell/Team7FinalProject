import "./App.css"
//@ts-ignore
import Sneaker from 'Sneakers.ts'
import React, { useState } from 'react'
import { DragDropContext, Draggable, DropResult, Droppable } from "react-beautiful-dnd"

const sneakers : Sneaker[] = [{
    brand: "Nike",
    name: "VaporMax",
    color: "black",
    size: "Nine",
    id : "1"
},
{
    brand: 'addidas',
    name: 'NMD R1',
    color: 'black',
    size: 'nine',
    id: '2'
},
{
    brand: 'puma',
    name: 'suede',
    color: 'black',
    size: '9',
    id : '3'
}]

const getSneakerStyle = (isDragging: boolean, draggableStyle : any) =>({
    padding: 10,
    margin: `0 50px 15px 50px`,
    background: isDragging? "purple": "white",
    color: isDragging ? 'white' : 'black',
    border: `1px solid black`,
    fontSize: `20px`,
    borderRadius: `5px`,

    ...draggableStyle
})


function App(){
    const [sneakerBox, setSneaker] = useState(sneakers)
    const onDragEnd = (result: DropResult) => {
        const {source, destination} = result
        if(!destination) return

        const items = Array.from(sneakers)
        const [newOrder] = sneakers.splice(source.index, 1)
        sneakers.splice(destination.index, 0, newOrder)
        setSneaker(sneakers)


    }
    return(
        <div className = "App">
            <h1>Drag and Drop</h1>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="sneakerBox">
                    {(provided) => (
                        <div className="sneakerBox" {...provided.droppableProps} ref={provided.innerRef}>
                            {sneakerBox.map(({brand, name, color, size, id}, index) => {
                                return (
                                    <Draggable key={id} draggableId={id} index = {index}>
                                        {(provided, snapshot) => (
                                            <div ref={provided.innerRef}
                                                    {...provided.dragHandleProps}
                                                    {...provided.dragHandleProps}
                                                    style={getSneakerStyle(snapshot.isDragging, provided.draggableProps.style)}
                                            >
                                                {name}
                                                {color}
                                                {size}
                                            </div>
                                        )}

                                    </Draggable>
                                )
                            })}

                        </div>
                    )}
                </Droppable>
            </DragDropContext>


        </div>


    )
}
export default App