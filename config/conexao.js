import mongoose from "mongoose";
const url = "mongodb+srv://joaopiresbg009:2H9er2gDRjehMUCi@primeiro.xyji4ur.mongodb.net/?retryWrites=true&w=majority&appName=Primeiro"

const conexao = await mongoose.connect(url)

export default conexao