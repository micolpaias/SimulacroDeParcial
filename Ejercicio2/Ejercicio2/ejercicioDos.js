/**
 * Aqui dentro probar el codigo que quieran
 */
function probarEjercicio(){
	var i;
	var continenteIngresado;
	var nombrePais;
	var numerodeHabitantes;
	var estadoEconomico;
	var temperaturaMinima;
	var cantidadTemperatura;
	var cantidadPaises;
	var menorCantidadHabitates;
	
	cantidadTemperatura = 0; 
	cantidadPaises = 0; 

	for (i= 0; i < 2; i++) {
		do 
		{
			continenteIngresado = prompt("Ingrese el continente");
		} while (continenteIngresado != "America" && continenteIngresado != "Asia" && continenteIngresado != "Europa" && continenteIngresado != "Africa" && continenteIngresado != "Oceania")
		{
			continenteIngresado = prompt("Intente nuevamente. Ingrese el continente");
		}
		do 
		{
			nombrePais = prompt("Ingrese el nombre del pais");
		} while (isNaN(nombrePais) == false)
		{
			continenteIngresado = prompt("Intente nuevamente. Ingrese el nombre del pais");
		}
		do 
		{
			numerodeHabitantes = prompt("Ingrese la cantidad de habitantes por pais");
		} while (isNaN(numerodeHabitantes) == true && numerodeHabitantes < 0 || numerodeHabitantes > 7001 )
		{
			continenteIngresado = prompt("Intente nuevamente. Ingrese la cantidad de habitantes por pais");
		}
		do 
		{
			estadoEconomico = prompt("Ingrese el nivel de probreza");
		} while (estadoEconomico != "Pobre" && estadoEconomico != "Rico" && estadoEconomico != "Muy Rico" || (estadoEconomico == "Pobre" && continenteIngresado == "Europa"))
		{
			continenteIngresado = prompt("Intente nuevamente. Ingrese el nivel de probreza");
		}
		do 
		{
			temperaturaMinima = prompt("Ingrese la temperatura minima ");
		} while (isNaN(temperaturaMinima) == true && temperaturaMinima < -51 || temperaturaMinima > 51)
		{
			continenteIngresado = prompt("Intente nuevamente. Ingrese la temperatura minima");
		};
	}

			//a - cantidad temperaturas pares
			if (temperaturaMinima % 2 == 0) {
				cantidadTemperatura++;
				alert(cantidadTemperatura);
			}
			//b - cantidad temperaturas impares en europa
			if (temperaturaMinima % 2 != 0) 
			{
				if (continenteIngresado == "Europa")
				{
					cantidadTemperatura++;
					alert(cantidadTemperatura);
				}
			}
			//c - El nombre del pais con menos habitantes
			menorCantidadHabitates = Math.min(temperaturaMinima);

			//d - cantidad de paises que superen los 40 g
			if (temperaturaMinima < 39) 
			{
				alert(cantidadTemperatura);
			}

			//e - cantidad de paises de america menos de 0 grados
			if (temperaturaMinima > 1) 
			{
				if (continenteIngresado == "America")
				{
					cantidadTemperatura++;
					alert(cantidadTemperatura);
				}
			}
			
}