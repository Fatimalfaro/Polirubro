import {createContext, useContext} from "react";
import type { Producto, ProductoFormData } from "../interfaces/productos";

export interface AppContextType{
    usuario: string | null;
    setUsuario: React.Dispatch<React.SetStateAction<string | null>>;
    productos : Producto[];
    crearProducto: (nuevoProducto:ProductoFormData) => void;
    editarProducto: (id: string, producto: ProductoFormData) => void;
    carrito: Producto[];
    agregarAlCarrito: (producto: Producto) => void;
    eliminarDelCarrito: (id: string) => void;
} 

export const AppContext = createContext<AppContextType | undefined>(undefined);

export function useAppContext(){
    const context = useContext(AppContext);
    if(!context){
        throw new Error ("useAppContext debe usarse dentro de un AppProvider")
    }
    return context;
}