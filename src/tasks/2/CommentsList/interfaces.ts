export interface ICommentsObject {
    id: number,
    created: string,
    text: string,
    author: number,
    parent: number,
    likes: number,
}
export interface IAuthorsObject {
    
    id: number,
    name: string,
    avatar: string,
    
}
export interface IComments {
    
    [propName: string]: any
    
}
export interface ICommentsListProps {
    comments:ICommentsObject[],
    authors:IAuthorsObject[],
    child_comment?:ICommentsObject[],
    ref?:React.RefObject<HTMLInputElement>
}
export interface ICommentCardProps {
    comment:ICommentsObject,
    authors:IAuthorsObject[],
    comments?:ICommentsObject[],


}

