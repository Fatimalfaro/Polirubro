import {createContext, useContext} from "react";
import type { Producto, ProductoFormData } from "../interfaces/productos";

export interface AppContextType{
    usuario: string | null;
    setUsuario: React.Dispatch<React.SetStateAction<boolean>>;
    productos : Producto[];
    crearProducto: (nuevoProducto:ProductoFormData)
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export function useAppContext(){
    const context = useContext(AppContext);
    if(!context){
        throw new Error ("useAppContext debe usarse dentro de un AppProvider")
    }
    return context;
}