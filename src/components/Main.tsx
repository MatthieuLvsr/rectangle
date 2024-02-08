import { useRef, useState } from "react";
import { Sidebar } from "./Sidebar"
import { Rectangle } from "./Rectangle";

let index = 0
const colors = ["red", "blue", "green", "yellow", "orange"]; // Liste des couleurs disponibles

// const randomColor = colors[Math.floor(Math.random() * colors.length)]; // Choix d'une couleur au hasard
const randomColor = () => {
  return colors[Math.floor(Math.random()* colors.length)]
}

export interface IRect {
  id:number;
  name: string;
  left: number;
  top: number;
  width: number;
  height: number;
  color: string;
}
const sample: IRect = {
    id:index++,
    name: "New Rectangle",
    left: 0,
    top: 0,
    width: 100,
    height: 100,
    color: randomColor()
  };


export const Main = ()=>{
  const [rectangles, setRectangles] = useState<IRect[]>([]);
  const imageRef = useRef<HTMLDivElement>(null)

  const handleAdd = () => {
    const rectangle: IRect = {
      id: index++,
      name: "New Rectangle",
      left: 0,
      top: 0,
      width: 100,
      height: 100,
      color: randomColor()
    };
    const newList = [...rectangles];
    newList.push(rectangle);
    setRectangles(newList);    
  };
  const updateRect = (rectangle: IRect) => {
    setRectangles(currentRectangles => {
      // Trouver l'index du rectangle à mettre à jour dans le tableau actuel
      const index = currentRectangles.findIndex(r => r.id === rectangle.id);
  
      // Si le rectangle existe (index !== -1), procéder à la mise à jour
      if (index !== -1) {
        // Créer une nouvelle copie du tableau en remplaçant l'élément à l'index trouvé
        const newRectangles = [...currentRectangles];
        newRectangles[index] = rectangle; // Met à jour l'élément avec les nouvelles données
  
        return newRectangles; // Retourne le nouveau tableau mis à jour
      }
  
      // Si l'élément n'est pas trouvé, retourne le tableau actuel sans modification
      return currentRectangles;
    });
  };
  
  return (
    <div className="flex min-h-screen bg-gray-100/40 dark:bg-gray-800/40">
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <a className="lg:hidden" href="#">
            <span className="sr-only">Home</span>
          </a>
          <h1 className="font-semibold text-lg md:text-2xl">Products</h1>
        </header>
        <main className="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex flex-row">
            <Sidebar rectangles={rectangles} handleAdd={handleAdd}/>
            <div className="flex flex-col gap-10 items-center justify-center">
              <h1 className="font-semibold text-lg md:text-2xl text-center">Product Name</h1>
              <div 
                ref={imageRef}
                className="rounded-lg"
                style={{
                  width:1000,
                  height:400,
                  aspectRatio: "1000/400",
                  objectFit: "cover",
                  backgroundImage:"url(/test.png)",
                  position:"relative"
                }}
              >
              {rectangles.map((r)=>(
                <Rectangle image={imageRef.current} key={r.id} rectangle={r} update={updateRect}/>
              ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}