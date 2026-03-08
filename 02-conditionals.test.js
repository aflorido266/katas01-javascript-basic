import {describe, it} from 'node:test';
import assert from 'node:assert/strict';


// PRIMERA PARTE: Condicionales en JavaScript

describe("Condicionales en JavaScript", () => {
    it("Completa el valor del resultado de la aserción para que pase el test", () => {
        let name = "Lara";
        let result = "Lara tiene un nombre corto";

        if (name.length >= 6) {
            result = "Lara tiene un nombre largo"
        }

        // Edita el assert (los "???") para que pase el test
        assert.strictEqual(result,"Lara tiene un nombre corto");
    })


    it("Completa el valor de la aserción", () => {
        let age = 21;
        let name = "Olga";
        let result;

        if (age >= 18) {
            result = `${name} es mayor de edad.`;
        } else {
            result = `${name} es menor de edad.`
        }

        // Edita el assert (los "???") para que pase el test
        assert.strictEqual(result,"Olga es mayor de edad.");
    })


    it("Completa el valor de la aserción", () => {
        let a = "piña";
        let b = "pepperoni";
        let number = 14;
        let result;

        if (number % 7 === 0) {
            result = `Pizza con ${b}`
        } else {
            result = `Pizza con ${a}`
        }

        // Edita el assert (los "???") para que pase el test
        assert.strictEqual(result,"Pizza con pepperoni");
    })
})


// PASO 1: Activa el bloque quitando las //
describe("Escribe tus propios tests", () => {

    it("Si la persona es de Reino Unido (UK)...", () => {
        let country = "UK";
        let greeting;

        if (country === "UK"){
            greeting = "Hello!"; 
        } else {
            greeting = "¡Hola!";
        }
        
        assert.strictEqual(greeting, "Hello!");
    }); // Cerramos el it correctamente

    it("Para saludar a alguien hay que saber la hora...", () => {
        let hour = 19;
        let saludo;

        if (hour < 12) {
            saludo = "Buenos días";
        } else if (hour >= 12 && hour < 20) { 
            saludo = "Buenas tardes";
        } else {
            saludo = "Buenas noches";
        }

        assert.strictEqual(saludo, "Buenas tardes");
    }); // Cerramos el it correctamente

}); 