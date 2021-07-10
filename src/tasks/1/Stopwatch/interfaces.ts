export interface ILap {
    key: number;
    time: number;
}

export interface IListProps {
    list:ILap[],
    getUnits(time:number):string
}