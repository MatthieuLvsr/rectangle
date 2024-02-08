import { useState } from "react";
import { SideElement } from "./SideElement";
import { Button } from "./ui/button";
import { IRect } from "./Main";

export interface ISidebarEntry{
    rectangles:IRect[]
    handleAdd:()=>void
}

export const Sidebar = (props:ISidebarEntry) => {

  return (
    <div className="flex h-full w-[240px] border-l">
      <div className="flex h-full items-start w-full">
        <nav className="flex-1 grid items-start gap-1 p-2 text-sm font-medium">
          {props.rectangles.map((r) => (
            <SideElement key={r.id} rectangle={r} />
          ))}
          <Button
            onClick={props.handleAdd}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            variant="outline"
          >
            Add Item
          </Button>
        </nav>
      </div>
    </div>
  );
};

