export interface AppItem
{
    name : string;
    description? : string;
    thumbcolor? : string;
    value? : string;
    icon? : string;
    url : string;
    checkable? : boolean;
    // children? : SidebarItem[];

}

export interface AppItems
{
    appitems : AppItem[];
}