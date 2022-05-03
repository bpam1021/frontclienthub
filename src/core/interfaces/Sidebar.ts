export interface SidebarItem
{
    name : string;
    value? : string;
    icon? : string;
    url : string;
    children? : SidebarItem[];

}

export interface SidebarProps
{
    menuitems : SidebarItem[];
    externalitems : SidebarItem[];
    socialitems : SidebarItem[];
}