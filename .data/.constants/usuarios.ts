import { v4 as uuid } from "uuid";
import Usuario from "../.model/usuario";

 const usuarios: Usuario[] = [
  { id: uuid(), nome: "Ana Pereira", email: "ana.pereira@example.com", senha: "senha123" },
  { id: uuid(), nome: "Bruno Silva", email: "bruno.silva@example.com", senha: "senha123" },
  { id: uuid(), nome: "Carla Souza", email: "carla.souza@example.com", senha: "senha123" },
  { id: uuid(), nome: "Daniel Rocha", email: "daniel.rocha@example.com", senha: "senha123" },
  { id: uuid(), nome: "Eduarda Lima", email: "eduarda.lima@example.com", senha: "senha123" },
  { id: uuid(), nome: "Felipe Torres", email: "felipe.torres@example.com", senha: "senha123" },
  { id: uuid(), nome: "Gabriela Alves", email: "gabriela.alves@example.com", senha: "senha123" },
  { id: uuid(), nome: "Henrique Dias", email: "henrique.dias@example.com", senha: "senha123" },
  { id: uuid(), nome: "Isabela Martins", email: "isabela.martins@example.com", senha: "senha123" },
  { id: uuid(), nome: "João Cardoso", email: "joao.cardoso@example.com", senha: "senha123" },
  { id: uuid(), nome: "Kátia Monteiro", email: "katia.monteiro@example.com", senha: "senha123" },
  { id: uuid(), nome: "Lucas Oliveira", email: "lucas.oliveira@example.com", senha: "senha123" },
  { id: uuid(), nome: "Mariana Braga", email: "mariana.braga@example.com", senha: "senha123" },
  { id: uuid(), nome: "Nicolas Freitas", email: "nicolas.freitas@example.com", senha: "senha123" },
  { id: uuid(), nome: "Olívia Fernandes", email: "olivia.fernandes@example.com", senha: "senha123" },
  { id: uuid(), nome: "Paulo Ribeiro", email: "paulo.ribeiro@example.com", senha: "senha123" },
  { id: uuid(), nome: "Queila Castro", email: "queila.castro@example.com", senha: "senha123" },
  { id: uuid(), nome: "Rafael Moura", email: "rafael.moura@example.com", senha: "senha123" },
  { id: uuid(), nome: "Sofia Mendes", email: "sofia.mendes@example.com", senha: "senha123" },
  { id: uuid(), nome: "Tiago Barros", email: "tiago.barros@example.com", senha: "senha123" },
];
console.log(usuarios);

export default usuarios;