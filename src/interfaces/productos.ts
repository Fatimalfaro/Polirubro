export type Category= 'Electro' | 'Bazar' | 'Ofertas Mundialistas';

export interface Producto


{
    id:string;
    nombreProducto: string;
    precio: number;
    categoria:  Category;
    imagen: string;
    descripcion: string;
    stock: number;
}

export interface ProductoCarrito extends Producto {
  cantidad: number;
}

export type ProductoFormData = Omit<Producto, 'id'>;
