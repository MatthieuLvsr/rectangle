import { IRect } from "./Main"

export interface ISideElement{
    rectangle:IRect
}

export const SideElement = (props:ISideElement) => {
    return(        
        <a
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
        href="#"
      >
        {props.rectangle.name}
      </a>
    )
}