import {DragDropContext,Droppable,Draggable} from 'react-beautiful-dnd'
import mokcData from "../../mockData"
import { Card } from '../card/card'
import { useState } from 'react'
import "./kanban.css"
export function Kanban(){
    const [data,setData] = useState(mokcData);
    const onDragEnd =(result)=>{
        if(!result.destination) return
        const {source,destination} = result;
        if(source.droppableId !== destination.droppableId){
            const sourceColIndex = data.findIndex(e=>e.id === source.droppableId)
            const destinacionColIndex = data.findIndex(e=>e.id === destination.droppableId)

            const SourceCol = data[sourceColIndex]
            const destinacionCol = data[destinacionColIndex]

            const sourceTask =[...SourceCol.task]
            const destinationtask=[...destinacionCol.task]

            const [removed] = sourceTask.splice(source.index,1)
            destinationtask.splice(destination.index,0,removed)

            data[sourceColIndex].task = sourceTask;
            data[destinacionColIndex].task = destinationtask;
            console.log(data);
            setData(data);
        }
    }
    return(
       <DragDropContext onDragEnd={onDragEnd}>
        <div className='kanban'>
        {data.map((section)=>(
            <Droppable key={section.id} droppableId={section.id}>
                {(provided)=>(
                    <div {...provided.droppableProps}
                    className='kanban__section'
                    ref={provided.innerRef}>
                        <div className='kanban__section_title'>{section.title}</div>
                        <div className='kanban__section_content'>
                            {section.task.map((task,index)=>(
                                <Draggable key={task.id}
                                draggableId={task.id}
                                index={index}>
                                    {(provided,snapshot)=>(
                                        <div ref={provided.innerRef}    
                                         {...provided.draggableProps}
                                         {...provided.dragHandleProps}
                                        style={
                                            {...provided.draggableProps.style,opacity:snapshot.isDragging?"0.5":"1"}
                                        }>
                                            <Card>
                                                {task.title}
                                            </Card>
                                       
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                        </div>
                    </div>
                )

                }

            </Droppable>
        ))}
        </div>
       </DragDropContext>
    )
}