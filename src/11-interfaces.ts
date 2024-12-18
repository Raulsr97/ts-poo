// ¿Por qué usamos una interfaz?
// Para definir un contrato que cualquier clase que implemente esta interfaz debe seguir. Esto es útil para asegurar consistencia en las clases que comparten un propósito similar.

// El contenido de una interfaz debe ser público
export interface Driver {
   database: string
   password: string
   port: number

   connect(): void
   disconnect(): void
   isConnected(name: string): boolean
}

class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect(): void {

  }

  disconnect(): void {

  }

  isConnected(name: string): boolean {
      return true
  }
}

class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect(): void {

  }

  disconnect(): void {

  }

  isConnected(name: string): boolean {
      return true
  }
}
