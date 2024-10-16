export interface posts {
    id : number,
    author : {
        authorId : number,
        firstName : string,
        lastName : string,
        photo : string
    },
    content : string,
    pinned : boolean,
    banner : string,
    visible : boolean,
    liked : number
}