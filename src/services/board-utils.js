import { utilService } from "./util.service"


export const boardUtils = {
    getBgs,
    getBoard,
    getGroup,
    getTask
}

export function getBgs(){
    return [
        'https://images6.alphacoders.com/476/thumb-1920-476288.jpg',
        'https://images7.alphacoders.com/411/thumb-1920-411820.jpg',
        'https://images4.alphacoders.com/378/thumb-1920-37864.jpg',
        'https://images2.alphacoders.com/521/thumb-1920-521718.jpg',
        'https://images8.alphacoders.com/468/thumb-1920-468739.jpg',
        'https://images2.alphacoders.com/238/thumb-1920-238870.jpg',
        'https://images2.alphacoders.com/468/thumb-1920-4682.jpg',
        'https://images8.alphacoders.com/594/thumb-1920-594870.jpg',
        'https://images3.alphacoders.com/330/thumb-1920-33079.jpg',
        'https://images5.alphacoders.com/462/thumb-1920-462370.jpg',
        'https://images7.alphacoders.com/329/thumb-1920-329647.jpg',
        'https://images6.alphacoders.com/338/thumb-1920-338596.jpg',
    ]
}

function getTask(user){
    return {
        "id" : `t-${utilService.makeId()}`,
        "title" : "Task",
        "description" : "task",
        "createdAt" : Date.now(),
        "createdBy" : user,
        "style" : {
            "coverMode" : "",
            "bgColor" : ""
        },
        "labelIds" : [],
        "members" : [],
        "dueDate" : null,
        "isDone" : false
    }
}

function getGroup(user){
    return {
        "id" : `g-${utilService.makeId()}`,
        "title" : "Group",
        "description":"group",
        "createdAt":Date.now(),
        "createdBy":user,
        "tasks" : [getTask(user),getTask(user),getTask(user)],
        "style" : {
            "bgImg" : "",
            "bgClr" : ""
        }
    }
}

 function getBoard(boardTitle,bg,loggedUser){
    return {
        "title" : `${boardTitle}`,
        "description":"board",
        "createdAt" : Date.now(),
        "createdBy" : loggedUser,
        "groups" : [getGroup(loggedUser),getGroup(loggedUser),getGroup(loggedUser)],
        "labels" : [ 
            {
                "title" : "Done",
                "color" : "#61bd4f",
                "id" : "Wg7a1W"
            }, 
            {
                "title" : "Important",
                "color" : "#334563",
                "id" : "6UZlzw"
            }, 
            {
                "title" : "In Progress",
                "color" : "#c277e0",
                "id" : "kv9aO3"
            }, 
            {
                "title" : "Meeting",
                "color" : "#f2d600",
                "id" : "yp1H2V"
            }, 
            {
                "title" : "Urgent",
                "color" : "#ff9e1a",
                "id" : "PXYKmg"
            }, 
            {
                "title" : "On hold",
                "color" : "#eb5a46",
                "id" : "6W2ZZx"
            }
        ],
        "activities" : [],
        "members" : [],
        "style" : {
            "bgClr" : "",
            "bgImg" : `${bg}`
        },
        "isFavorite" : false
    }
}