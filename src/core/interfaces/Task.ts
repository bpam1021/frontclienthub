export interface TaskItem
{
    name : string;
    description? : string;
    thumbcolor? : string;
    value? : string;
    icon? : string;
    url : string;
    checkable : boolean;
    // children? : SidebarItem[];

}

export interface TodayTask
{
    todaytaskitmes : TaskItem[];
}